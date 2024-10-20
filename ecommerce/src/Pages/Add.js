import { useNavigate } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'; 

function Add() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            confirmAdd(); 
        }
        setValidated(true);
    };    

    const handleBack = () => {
        navigate('/productlist'); 
    };

    const confirmAdd = () => {
        // ADD YOUR CODE FOR ADDING THE ITEM HERE
        navigate('/productlist'); 
    };

    return (
        <Container className="my-4" style={{ maxWidth: '500px' }}>
            <Button 
                className="custom-button" 
                onClick={handleBack} 
                style={{ float: 'right', backgroundColor: 'transparent', border: 'none', fontSize: '1.5rem' }}
            >
                <GiCancel />
            </Button>
            <h2 className="mb-4">Add Item</h2>
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Product Name' 
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
                        required 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid quantity.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Product Price' 
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
