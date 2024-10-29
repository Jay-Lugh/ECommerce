import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'; 
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Delete from './DeletePrompt';
import React, { useState, useEffect } from 'react'; 
import axios from "axios";

function ProductList() {
    const navigate = useNavigate(); 
    const [showModal, setShowModal] = useState(false);

    const [selectedid, setSelectedId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleAdd = () => {
        navigate(`/add`); 
    };
    const handleEdit = (product) => {
        navigate(`/edit/${product.id}`, { state: product });
    };


    //DELETE
    const handleDelete = (id) => {
        setSelectedId(id);
        setShowModal(true); 
    };

    const confirmDelete = async () => {
        console.log(`Deleted item with barcode: ${selectedid}`);
        //ADD HERE THE CODE FOR DELETING
        try {
            await axios.delete(`http://127.0.0.1:8000/api/products/${selectedid}`);
            setProducts(products.filter(product => product.id !== selectedid)); 
            console.log('Successfully Deleted!');
          } catch (error) {
            console.log('Failed to delete product :(');
          }
        setShowModal(false);
    
    };

    //SEARCH
    const handleSearch = (e) => {
        //ADD CODE FOR SEARCH
        console.log('search is ' + searchTerm);
        e.preventDefault(); 
    };


    //Show the list of products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products');
                setProducts(response.data.data); 
            } catch (err) {
                setError('Failed to fetch products');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
    
        fetchProducts();
    }, []);





    if (loading) {
        return <div className="loadingScreen">Loading...</div>;
      }
    
      if (error) {
        return <div className="errorScreen">{error}</div>;
      }

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
                            <Button type="submit" onClick={() => handleAdd()}>Add Product <MdOutlineAddCircleOutline/> </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="productTable">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
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
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                 <td>{product.barcode}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.description}</td>
                                <td>{product.stock}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleEdit(product)} className="ms-2">Edit</Button>
                                    <Button variant="danger" onClick={() => handleDelete(product.id)} className="ms-2">Delete</Button>
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
