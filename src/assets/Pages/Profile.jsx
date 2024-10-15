import React from 'react';


const Profile = () => {
  const employee = {
    name: "Jane Smith",
    position: "Software Engineer",
    email: "jane.smith@example.com",
    phone: "+1234567890",
    bio: "Dedicated software engineer with over 5 years of experience in developing scalable web applications.",
    avatar: "/path/to/avatar.jpg" 
  };

  const handleEdit = () => {
    // Logic to handle profile editing
    alert("Edit profile clicked!");
  };

  return (
    <div className="employee-profile-container">
      <div className="employee-profile-header">
        <img src={employee.avatar} alt={`${employee.name}'s avatar`} className="employee-profile-avatar" />
        <h2>{employee.name}</h2>
        <h4>{employee.position}</h4>
      </div>
      <div className="employee-profile-contact">
        <p>Email: <a href={`mailto:${employee.email}`}>{employee.email}</a></p>
        <p>Phone: <a href={`tel:${employee.phone}`}>{employee.phone}</a></p>
      </div>
      <div className="employee-profile-bio">
        <h3>About Me</h3>
        <p>{employee.bio}</p>
      </div>
      <button onClick={handleEdit} className="edit-button">Edit Profile</button>
    </div>
  );
};

export default Profile;
