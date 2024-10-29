import { useNavigate } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'; 
import axios from "axios";

function Add() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate(); 

    const [product, setProduct] = useState({
        barcode: "",
        name: "",
        price: "",
        stock: "",
        category: "",
        description: ""
    });

    const handleSubmit = async (e) => {
        const form = e.currentTarget; // Get the form element
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            await confirmAdd(); 
        }
        setValidated(true); // Set validated state after submission
    };    

    const confirmAdd = async () => {
        try {
            console.log('Adding item:', product); 
            await axios.post('http://127.0.0.1:8000/api/products', product);
            alert('Product added successfully!'); 
            navigate('/productlist'); 
        } catch (error) {
            console.error('Failed to save product', error);
            alert('Failed to save product. Please try again.');
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleBack = () => {
        navigate('/productlist'); 
    };

    return (
        <Container className="my-4" style={{ maxWidth: '700px' }}>
            <Button className="button" onClick={handleBack}>
                <GiCancel />
            </Button>
           
            <h2 className="mb-4">Add Item</h2>
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBarcode">
                    <Form.Label>Barcode:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Product Barcode' 
                        name="barcode"
                        value={product.barcode}
                        onChange={handleChange}
                        required 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid barcode.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Product Name' 
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formCategory">
                    <Form.Label>Category:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Product Category' 
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid category.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder='Product Description' 
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid description.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formQuantity">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder='Product Quantity' 
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        required 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid quantity.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder='Product Price' 
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid price.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="mt-3">Save</Button>
            </Form>
        </Container>
    );
}

export default Add;
