import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


const CreateLead = () => {
  const userss = useSelector((state) => state.user._id);
  console.log(userss,"users is called")
  const [formFields, setFormFields] = useState({
    name: '',
    mobileNo: '',
    email: '',
    address: '',
    alternateNumber: '',
    budget: '',
  });

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post(`http://localhost:5000/api/leadDetail/addDetails?createdBy:${userss}`, formFields);
      console.log(res.data); // Handle the response from the server
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  return (
    <div className="container">
      <h2>Create Lead</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={formFields.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile No:</label>
          <input type="text" className="form-control" name="mobileNo" value={formFields.mobileNo} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" value={formFields.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Address:</label>
          <input type="text" className="form-control" name="address" value={formFields.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Alternate Number:</label>
          <input type="text" className="form-control" name="alternateNumber" value={formFields.alternateNumber} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Budget:</label>
          <input type="number" className="form-control" name="budget" value={formFields.budget} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateLead;
