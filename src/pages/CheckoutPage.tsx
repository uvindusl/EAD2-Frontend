import { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import "../css/Checkout.css";
import axios from "axios";

// Define the Checkout interface
interface CheckoutItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  picture: string; // Base64 string for the image
}

function CheckoutPage() {
  const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const apiUrl = "http://localhost:8081/order-development";

    setLoading(true);
    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          setCheckoutItems(response.data);
          // Calculate total amount
          const total = response.data.reduce((sum: number, item: CheckoutItem) => sum + item.price * item.quantity, 0);
          setTotalAmount(total);
        } else if (response.status === 404) {
          setCheckoutItems([]);
        } else {
          setError("Failed to load checkout details.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching checkout data:", error);
        setError("Failed to load checkout details. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginTop: "2rem" }}>
        {loading ? (
          <p>Loading checkout details...</p>
        ) : error ? (
          <p>{error}</p>
        ) : checkoutItems.length > 0 ? (
          <div className="checkout-container">
            <h2>Checkout Summary</h2>
            <ul className="checkout-items">
              {checkoutItems.map((item) => (
                <li key={item.id} className="checkout-item">
                  <img src={item.picture} alt={item.name} className="checkout-item-img" />
                  <div className="checkout-item-details">
                    <h4>{item.name}</h4>
                    <p>Price: Rs. {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total: Rs. {totalAmount}</h3>
            <button className="proceed-btn">Proceed to Payment</button>
          </div>
        ) : (
          <p>No items in checkout</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
