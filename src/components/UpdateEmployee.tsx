import React, { useState } from "react";
import "../css/EmployeeForms.css"; 

function UpdateEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    telephone: "",
    password: "",
    retypePassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Employee Data:", employee);
    alert("Employee Updated Successfully!");
  };

  return (
    <div className="form-container">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Employee Name</label>
        <input type="text" name="name" value={employee.name} required />

        <label>Employee Address</label>
        <input type="text" name="address" value={employee.address} required />

        <label>Employee Telephone Number</label>
        <input type="text" name="telephone" value={employee.telephone} required />

        <label>Password</label>
        <input type="password" name="password" value={employee.password} required />

        <label>Retype Password</label>
        <input type="password" name="retypePassword" value={employee.retypePassword} required />

        <button type="submit" className="submit-btn">Update</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
