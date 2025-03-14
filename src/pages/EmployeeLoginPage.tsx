import EmployeeLoginForm from "../components/EmployeeLoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/navBar";
import "../css/LoginPage.css";
import axios from "axios";

interface employee {
  employeeId: number;
  employeeName: string;
  employeeAddress: string;
  employeeTel: number;
  employeePassword: string;
}

function EmployeeLoginPage() {
  const [employee, setemployee] = useState<employee | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    const apiUrl = `http://localhost:8082/employee-micro/employees?name=${username}&password=${password}`;

    setLoading(true);
    setError(null);

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          //HTTP 200 status is scuccessful connect with the server and send data
          const employeeid = response.data;
          setemployee(response.data);
          navigate("/home");

          //stroe the employee id
          sessionStorage.setItem(
            "employeeId",
            employeeid.employeeId.toString()
          );
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        if (error.response) {
          if (error.response.status === 404) {
            setError("employee not found. Please check your credentials.");
          } else {
            setError("Login failed. Please try again later.");
          }
        } else {
          setError("Network error. Please check your connection.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="content-area">
        <div className="login-container">
          <EmployeeLoginForm
            onLogin={handleLogin}
            loading={loading}
            error={error}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default EmployeeLoginPage;
