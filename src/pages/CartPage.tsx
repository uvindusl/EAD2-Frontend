import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import "../css/CartPage.css";
import CartCard from "../components/CartCard";
import { useEffect, useState } from "react";
import axios from "axios";

interface CartItem {
  cartId: number; // Changed to cartId to match response
  customerId: number; // Changed to customerId to match response
  foodId: number; // Changed to foodId to match response
  quantity: number; // Changed to quantity to match response
  subTotal: number; // Changed to subTotal to match response
}

interface FoodItem {
  fid: number;
  picture: string;
  name: string;
  description: string;
}

function CartPage() {
  const customerid = Number(sessionStorage.getItem("customerId"));
  const [cart, setCart] = useState<CartItem[]>([]);
  const [food, setFood] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!customerid) {
      setError("Invalid customer ID");
      setLoading(false);
      return;
    }

    const apiUrl = `http://localhost:8083/order-micro/carts/${customerid}`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          console.log("cart:", response.data);
          setCart(response.data);

          const fetchFoodDetails = async () => {
            const foodDetails: FoodItem[] = [];
            for (const item of response.data) {
              if (item.foodId !== undefined && item.foodId !== null) {
                try {
                  const foodResponse = await axios.get(
                    `http://localhost:8081/food-micro/foods/${item.foodId}`
                  );
                  if (foodResponse.status === 200) {
                    foodDetails.push(foodResponse.data);
                  } else {
                    console.error(
                      `Failed to fetch food with ID ${item.foodId}`
                    );
                  }
                } catch (foodError) {
                  console.error(
                    `Error fetching food with ID ${item.foodId}:`,
                    foodError
                  );
                }
              } else {
                console.error("item.foodId is undefined or null");
              }
            }
            setFood(foodDetails);
          };

          fetchFoodDetails();
        } else {
          setError("Failed to fetch cart data.");
        }
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
        if (error.response && error.response.status === 404) {
          setError("Cart not found.");
        } else {
          setError("Failed to fetch cart data. Please try again later.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [customerid]);

  return (
    <div className="cart-container">
      <NavBar />
      <div className="cart-main-content">
        <div className="cart-items-section">
          {loading ? (
            <p>Loading cart items...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <div className="cart-cards-container">
              <div className="cart-controls">
                <div className="select-all">
                  <input type="checkbox" id="select-all" />
                  <label htmlFor="select-all">Select All</label>
                </div>
                <div className="delete-all">
                  <button className="delete-btn">
                    <i className="trash-icon"></i> Delete All
                  </button>
                </div>
              </div>

              {cart.map((cartItem) => {
                const foodItem = food.find((f) => f.fid === cartItem.foodId);

                if (!foodItem) {
                  return null;
                }

                return (
                  <CartCard
                    key={cartItem.cartId}
                    cart={{
                      foodid: cartItem.foodId.toString(),
                      foodname: foodItem.name,
                      fooddescription: foodItem.description,
                      foodimg: foodItem.picture,
                      qty: cartItem.quantity,
                      subtotal: cartItem.subTotal ?? 0,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="order-summary-section">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items:</span>
            <span className="summary-value">{cart.length}</span>
          </div>
          <div className="summary-row sub-total">
            <span>Sub Total:</span>
            <span className="summary-value">
              $
              {cart
                .reduce((sum, item) => sum + (item.subTotal ?? 0), 0)
                .toFixed(2)}
            </span>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
