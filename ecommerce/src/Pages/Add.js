import { useNavigate } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'; 

function Add() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate(); 

    const [formdata, setFormdata] = useState({
        name: '',
        category: '',
        description: '',
        qty: '',
        price: '',
    });

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            confirmAdd(); 
        }
        setValidated(true);
    };    

    const handleBack = () => {
        navigate('/productlist'); 
    };

    const confirmAdd = () => {
        // ADD YOUR CODE FOR ADDING THE ITEM HERE THE DATA IS STORED IN FORMDATA
        console.log('Adding item:', formdata);
        navigate('/productlist'); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value,
        });
    };

    return (
        <Container className="my-4" style={{ maxWidth: '500px' }}>
            <Button className="button" onClick={handleBack}>
                <GiCancel />
            </Button>
           
            <h2 className="mb-4">Add Item</h2>
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Product Name' 
                        name="name"
                        value={formdata.name}
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
                        value={formdata.category}
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
                        value={formdata.description}
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
                        name="qty"
                        value={formdata.qty}
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
                        value={formdata.price}
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
