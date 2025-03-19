import React, { useState } from "react";
import axios from "axios";
import "../css/EmployeeForms.css";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    telephone: "",
    password: "",
    retypePassword: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (employee.password !== employee.retypePassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8082/employee-micro/register",
        {
          employeeName: employee.name,
          employeeAddress: employee.address,
          employeeTel: employee.telephone,
          password: employee.password,
        }
      );

      console.log("New Employee Data:", response.data);
      alert("Employee Added Successfully!");

      setEmployee({
        name: "",
        address: "",
        telephone: "",
        password: "",
        retypePassword: "",
      });
      setError(null);
    } catch (error) {
      console.error("Error adding employee:", error);
      setError("Failed to add employee. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Employee</h2>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Employee Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
          pattern="[A-Za-z]*"
        />

        <label>Employee Address</label>
        <input
          type="text"
          name="address"
          value={employee.address}
          onChange={handleChange}
          required
        />

        <label>Employee Telephone Number</label>
        <input
          type="number"
          name="telephone"
          value={employee.telephone}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={employee.password}
          onChange={handleChange}
          required
        />

        <label>Retype Password</label>
        <input
          type="password"
          name="retypePassword"
          value={employee.retypePassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          Add New Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
