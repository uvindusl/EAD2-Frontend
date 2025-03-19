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
      {error && <p className="error-message">{error}</p>}

      <form className="form-content" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Employee Address"
          value={employee.address}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="telephone"
          placeholder="Employee Telephone Number"
          value={employee.telephone}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={employee.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="retypePassword"
          placeholder="Retype Password"
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
