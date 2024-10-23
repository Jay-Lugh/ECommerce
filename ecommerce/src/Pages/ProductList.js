import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'; 
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Delete from './DeletePrompt';
import React, { useState } from 'react'; 

function ProductList(props) {
    const products = props.items; 
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

    const confirmDelete = () => {
        console.log(`Deleted item with barcode: ${selectedBarcode}`);
        //ADD HERE THE CODE FOR DELETING
        setShowModal(false);
    
    };

    const handleSearch = (e) => {
        //ADD CODE FOR SEARCH
        console.log('search is ' + searchTerm);
        e.preventDefault(); 
    };


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
                            <Button type="submit"  onClick={() => handleAdd()}>Add Product <MdOutlineAddCircleOutline/> </Button>
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
