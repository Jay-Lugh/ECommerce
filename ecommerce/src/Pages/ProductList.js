import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'; 
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Delete from './DeletePrompt';
import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    const [showModal, setShowModal] = useState(false);
    const [selectedBarcode, setSelectedBarcode] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAdd = () => {
        navigate(`/add`); 
    };

    const handleEdit = (product) => {
        navigate(`/edit/${product.barcode}`, { state: product });
    };

    const handleDelete = (barcode) => {
        setSelectedBarcode(barcode);
        setShowModal(true); 
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/products/${selectedBarcode}`);
            // Update local state to remove the deleted product
            setProducts(products.filter(product => product.barcode !== selectedBarcode));
            setShowModal(false);
        } catch (err) {
            setError('Failed to delete product');
            console.error(err);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/products?search=${searchTerm}`);
            setProducts(response.data.data); // Adjust based on your API response structure
        } catch (err) {
            setError('Failed to fetch products');
            console.error(err);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products');
                setProducts(response.data.data); // Adjust based on your API response structure
            } catch (err) {
                setError('Failed to fetch products');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div className="actions d-flex justify-content-center">
                <Form inline onSubmit={handleSearch}>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="me-sm-2"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Search</Button>
                        </Col>
                        <Col xs="auto">
                            <Button onClick={handleAdd}>Add Product <MdOutlineAddCircleOutline/> </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="productTable">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                           <th>Barcode</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.barcode}>
                                 <td>{product.barcode}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.description}</td>
                                <td>{product.qty}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleEdit(product)} className="ms-2">Edit</Button>
                                    <Button variant="danger" onClick={() => handleDelete(product.barcode)} className="ms-2">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <Delete
                show={showModal} 
                handleClose={() => setShowModal(false)} 
                confirmDelete={confirmDelete}
            />
        </>
    );
}

export default ProductList;
