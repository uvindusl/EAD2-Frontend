import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/navBar";
import "../css/LoginPage.css";
import axios from "axios";

interface Customer {
  customerId: number;
  customerName: string;
  customerTel: number;
}

function LoginPage() {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = (username: string, tel: number) => {
    const apiUrl = `http://localhost:8080/customer-micro/customers?name=${username}&tel=${tel}`;

    setLoading(true);
    setError(null);

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          //HTTP 200 status is scuccessful connect with the server and send data
          const customerid = response.data;
          setCustomer(response.data);
          navigate("/home");

          //stroe the customer id
          sessionStorage.setItem(
            "customerId",
            customerid.customerId.toString()
          );
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        if (error.response) {
          if (error.response.status === 404) {
            setError("Customer not found. Please check your credentials.");
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
          <LoginForm onLogin={handleLogin} loading={loading} error={error} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
