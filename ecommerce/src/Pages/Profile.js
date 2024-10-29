import React from 'react';
import profile from "../profile.png";
import Form from 'react-bootstrap/Form';

const Profile = () => {
  const employee = {
    name: "Something Something",
    position: "Hardware Employee",
    email: "something@example.com",
    phone: "+1234567890",
    avatar: profile
  };

  return (
    <div className="profile">

      <div className="profile-header">
        <img src={employee.avatar} alt={`${employee.name}'s avatar`} className="profile-avatar" />
      </div>

      <Form className="profile">
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control 
            type="text" 
            value={employee.name}
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="formPosition">
          <Form.Label>Position:</Form.Label>
          <Form.Control 
            type="text" 
            value={employee.position}
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control 
            type="email" 
            value={employee.email}
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone:</Form.Label>
          <Form.Control 
            type="tel" 
            value={employee.phone}
            readOnly
          />
        </Form.Group>
      </Form>

    </div>
  );
};

export default Profile;
