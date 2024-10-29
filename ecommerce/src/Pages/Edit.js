import { useLocation, useNavigate } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

function Edit() {
    const location = useLocation();
    const navigate = useNavigate();
    const purchase = location.state;

    const [validated, setValidated] = useState(false);
    const [product, setProduct] = useState({
        id: '',
        barcode: '',
        name: '',
        category: '',
        description: '',
        stock: '',
        price: '',
    });

    useEffect(() => {
        if (purchase) {
          setProduct(purchase)
        } else {
            console.error("No product data available");
            navigate('/productlist'); // Redirect if there's no product data
        }
    }, [purchase, navigate]);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            await confirmEdit();
        }
        setValidated(true);
    };

    const handleBack = () => {
        navigate('/productlist');
    };

    const confirmEdit = async () => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/products/${product.id}`, product);
            console.log('Editing item:', product);
            navigate('/productlist');
        } catch (error) {
            console.error('There was an error editing the item!', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    return (
        <Container className="container" style={{ maxWidth: '700px' }}>
            <Button className="button" onClick={handleBack}>
                <GiCancel />
            </Button>
            <h2>Edit Item {purchase.id}</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBarcode">
                    <Form.Label>Barcode:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Product Barcode'
                        name="barcode"
                        value={product.barcode}
                        readOnly
                        style={{ backgroundColor: '#f8f9fa', cursor: 'not-allowed' }}
                    />
                </Form.Group>

                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Product Name'
                        name="name"
                        value={product.name}
                        readOnly
                        style={{ backgroundColor: '#f8f9fa', cursor: 'not-allowed' }}
                    />
                </Form.Group>

                <Form.Group controlId="formCategory">
                    <Form.Label>Category:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Product Category'
                        name="category"
                        value={product.category}
                        readOnly
                        style={{ backgroundColor: '#f8f9fa', cursor: 'not-allowed' }}
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder='Product Description'
                        required
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formQuantity">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder='Product Quantity'
                        required
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Product Price'
                        required
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button type="submit" className="mt-3">Save</Button>
            </Form>
        </Container>
    );
}

export default Edit;
