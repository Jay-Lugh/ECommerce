import { useNavigate } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'; 
import axios from 'axios'; // Import Axios

function Add() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate(); 

    const [formdata, setFormdata] = useState({
        barcode: '',
        name: '',
        category: '',
        description: '',
        stock: '',
        price: '',
    });

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        e.preventDefault(); // Prevent the default form submission behavior
    
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            console.log('Form data being submitted:', formdata); // Debug log
            await confirmAdd(); // Call confirmAdd
        }
        setValidated(true);
    }; 

    const confirmAdd = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/products', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Product added:', response.data);
            navigate('/productlist');
        } catch (error) {
            console.error('Error adding product:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
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
                        type="number" 
                        placeholder='Product Barcode' 
                        name="barcode"
                        value={formdata.barcode}
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
                        name="stock"
                        value={formdata.stock}
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
