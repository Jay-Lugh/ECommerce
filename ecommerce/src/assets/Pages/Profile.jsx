import React from 'react';
import profile from "/profile.png";



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
        <h2>{employee.name}</h2>
        <h4>{employee.position}</h4>
      </div>

      <div className="profile-contact">
        <p>Email: <a href={`mailto:${employee.email}`}>{employee.email}</a></p>
        <p>Phone: <a href={`tel:${employee.phone}`}>{employee.phone}</a></p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>This is the end.</p>
      </div>

    </div>
  );
};

export default Profile;
