import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [formdata, setFormdata] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            console.log('Logging in with', formdata);
            navigate('/productlist');
        }
        setValidated(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value,
        });
    };

    return (
        <Container className="my-4" style={{ maxWidth: '500px'}}>
            <h2 className="mb-4 text-center">Login</h2>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={formdata.username}
                        onChange={handleChange}
                        required
                        style={{
                            borderColor: validated && formdata.username ? 'initial' : '',
                            boxShadow: validated && formdata.username ? 'none' : '',
                        }}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid username.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={formdata.password}
                        onChange={handleChange}
                        required
                        style={{
                            borderColor: validated && formdata.password ? 'initial' : '',
                            boxShadow: validated && formdata.password ? 'none' : '',
                        }}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="mt-3">Login</Button>
            </Form>
        </Container>
    );
};

export default Login;
