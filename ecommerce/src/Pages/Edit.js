import { useLocation, useNavigate } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'; 

function Edit() {
    const location = useLocation();
    const navigate = useNavigate();
    const purchase = location.state;

    const [validated, setValidated] = useState(false); 
    const [formdata, setFormData] = useState({
        barcode:  purchase.barcode,
        name: purchase.name,
        category: purchase.category,
        description: purchase.description,
        qty: purchase.qty,
        price: purchase.price,
    });

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            confirmEdit(); 
        }
        setValidated(true); 
    };

    const handleBack = () => {
        navigate('/productlist'); 
    };

    const confirmEdit = () => {
         // ADD YOUR CODE FOR EDIT THE ITEM HERE THE DATA IS STORED IN FORMDATA
        console.log('Editing item:', formdata);
        navigate('/productlist'); 
    };

    const handleChange = (event) => { 
        const { name, value } = event.target;
        setFormData({
            ...formdata,
            [name]: value,
        });
    };

    return (
        <Container className="container" style={{ maxWidth: '700px' }}>
            <Button className="button" onClick={handleBack}>
                <GiCancel />
            </Button>
            <h2>Edit Item</h2>
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}> 

               <Form.Group controlId="formBarcode">
                    <Form.Label>Barcode:</Form.Label>
                    <Form.Control 
                        type ="number" 
                        placeholder='Product Barcode' 
                        name="barcode"
                        value={formdata.barcode}
                        readOnly
                        style={{ backgroundColor: '#f8f9fa', cursor: 'not-allowed' }}
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
                        value={formdata.name} 
                        readOnly
                        style={{ backgroundColor: '#f8f9fa', cursor: 'not-allowed' }}
                        
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
                        value={formdata.category} 
                        readOnly
                        style={{ backgroundColor: '#f8f9fa', cursor: 'not-allowed' }}
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
                        name="description" 
                        value={formdata.description} 
                        onChange={handleChange} 
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
                        name="qty" 
                        value={formdata.qty} 
                        onChange={handleChange} 
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
                        name="price" 
                        value={formdata.price} 
                        onChange={handleChange} 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid price.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit"  className="mt-3">Save</Button>
            </Form>
        </Container>
    );
}

export default Edit;
