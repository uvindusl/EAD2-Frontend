import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const customerId = Number(sessionStorage.getItem("customerId"));
  const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!customerId) {
      setError("Invalid customer ID");
      setLoading(false);
      return;
    }

    const fetchCheckoutData = async () => {
      try {
        // Fetch suborders for the customer
        const subOrdersResponse = await axios.get(
          `http://localhost:8083/order-micro/suborders/${customerId}`
        );
        const subOrders = subOrdersResponse.data;

        if (subOrders.length === 0) {
          setCheckoutItems([]);
          setTotalAmount(0);
          setLoading(false);
          return;
        }

        // Fetch food details for each suborder
        const foodDetailsPromises = subOrders.map((order: { foodId: any }) =>
          axios.get(`http://localhost:8081/food-micro/foods/${order.foodId}`)
        );

        const foodResponses = await Promise.all(foodDetailsPromises);

        const checkoutData: CheckoutItem[] = subOrders
          .map((order: any, index: number) => {
            const foodResponse = foodResponses[index];
            if (foodResponse && foodResponse.data) {
              const food = foodResponse.data;
              return {
                id: order.foodId,
                name: food.name,
                price: food.price,
                quantity: order.quantity,
                picture: food.picture,
              };
            } else {
              // Handle the case where food details are not found for a suborder
              console.warn(
                `Food details not found for foodId: ${order.foodId}`
              );
              return null; // Or handle it in another way (e.g., skip this item)
            }
          })
          .filter((item: null) => item !== null) as CheckoutItem[]; // Filter out null values

        setCheckoutItems(checkoutData);

        // Calculate total
        const total = checkoutData.reduce(
          (sum: number, item: CheckoutItem) => sum + item.price * item.quantity,
          0
        );
        setTotalAmount(total);
      } catch (error: any) {
        console.error("Error fetching checkout data:", error);
        setError("Failed to load checkout details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCheckoutData();
  }, [customerId]);

  const handlePayment = async () => {
    if (!customerId) {
      setError("Invalid customer ID");
      return;
    }

    if (checkoutItems.length === 0) {
      alert("No items to checkout.");
      return;
    }

    try {
      // Calculate total order price from checkoutItems
      const orderTotalPrice = checkoutItems.reduce(
        (sum: number, item: CheckoutItem) => sum + item.price * item.quantity,
        0
      );

      // Ensure order total is updated correctly
      const orderData = {
        customerId: customerId,
        total: orderTotalPrice, // Use calculated total price here
      };

      const response = await axios.post(
        "http://localhost:8083/order-micro/orders",
        orderData
      );

      if (response.status === 200 || response.status === 201) {
        // Order placed successfully, now delete suborders
        await axios.delete(
          `http://localhost:8083/order-micro/suborders/remove/${customerId}`
        );

        alert("Payment successful! Order placed and cart cleared.");

        // Clear state and redirect
        setCheckoutItems([]);
        setTotalAmount(0);
        navigate("/order-confirmation");
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      setError("Payment failed. Please try again.");
      if (error.response?.data?.message) {
        setError(`Payment failed: ${error.response.data.message}`);
      }
    }
  };

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
                  <img
                    src={
                      item.picture
                        ? `data:image/jpeg;base64,${item.picture}`
                        : "/placeholder.png"
                    }
                    alt={item.name}
                    className="checkout-item-img"
                  />
                  <div className="checkout-item-details">
                    <h4>{item.name}</h4>
                    <p>Price: Rs. {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total: Rs. {totalAmount}</h3>
            <button className="proceed-btn" onClick={handlePayment}>
              Proceed to Payment
            </button>
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
