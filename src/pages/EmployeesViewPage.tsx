import EmployeeCard from "../components/EmployeeCard";
import "../css/EmployeeViewPage.css";
import Footer from "../components/Footer";
import NavBar from "../components/navBar";
import { useEffect, useState } from "react";
import axios from "axios";

interface employee {
  id: number;
  name: string;
  address: string;
  tel: string;
}

function EmployeesViewPage() {
  const [employees, setEmployee] = useState<employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = "http://localhost:8082/employee-micro/employees";

    setLoading(true);
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging output

        if (response.status === 200) {
          const mappedEmployees = response.data.map((emp: any) => ({
            id: emp.employeeId,
            name: emp.employeeName,
            address: emp.employeeAddress,
            tel: emp.employeeTel,
          }));
          setEmployee(mappedEmployees);
        } else if (response.status === 204) {
          setEmployee([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Employee data:", error);
        setError("Failed to load employee data. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="employeeCard-container">
        {loading ? (
          <p className="loading-message">Loading Employee Data...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div>
            {employees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default EmployeesViewPage;
