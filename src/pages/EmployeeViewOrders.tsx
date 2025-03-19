import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import "../css/EmployeeViewOrders.css";

interface Order {
  orderId: number;
  orderCustomerId: number;
  orderTotalPrice: number;
}

function EmployeeViewOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data: ordersData } = await axios.get(
          "http://localhost:8083/order-micro/orders"
        );
        setOrders(ordersData);
      } catch (err) {
        console.error("Error loading orders:", err);
        setError("Failed to load orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <NavBar />
      <div className="orders-page">
        {loading ? (
          <p>Loading orders...</p>
        ) : error ? (
          <p>{error}</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="orders-grid">
            {orders.map((order) => (
              <div className="order-card" key={order.orderId}>
                <h3>Order ID: {order.orderId}</h3>
                <p>Total: Rs. {order.orderTotalPrice}</p>
                <p>Customer ID: {order.orderCustomerId}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default EmployeeViewOrders;
