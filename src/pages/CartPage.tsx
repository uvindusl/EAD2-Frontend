import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import "../css/CartPage.css";
import CartCard from "../components/CartCard";
import { useEffect, useState } from "react";
import axios from "axios";

interface CartItem {
  cartId: number;
  customerId: number;
  foodId: number;
  quantity: number;
  subTotal: number;
}

interface FoodItem {
  id: number;
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

    const fetchCartData = async () => {
      try {
        const cartResponse = await axios.get(
          `http://localhost:8083/order-micro/carts/${customerid}`
        );

        if (cartResponse.status === 200) {
          console.log("Fetched cart data:", cartResponse.data);
          setCart(cartResponse.data);
          fetchFoodDetails(cartResponse.data);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setError("Failed to fetch cart data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const fetchFoodDetails = async (cartItems: CartItem[]) => {
      try {
        const foodPromises = cartItems.map((item) =>
          axios
            .get(`http://localhost:8081/food-micro/foods/${item.foodId}`)
            .then((res) => {
              console.log(`Fetched food data for ID ${item.foodId}:`, res.data);
              return res.data;
            })
            .catch((err) => {
              console.error(`Error fetching food with ID ${item.foodId}:`, err);
              return null;
            })
        );

        const foodDetails = (await Promise.all(foodPromises)).filter(Boolean);
        console.log("Final food details array:", foodDetails);
        setFood(foodDetails);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    };

    fetchCartData();
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
                const foodItem = food.find(
                  (f) => Number(f.id) === Number(cartItem.foodId)
                );

                console.log("Matching cartItem:", cartItem);
                console.log("Matched foodItem:", foodItem);

                if (!foodItem) {
                  return (
                    <div key={cartItem.cartId} className="cart-card">
                      <p>
                        ⚠️ Food details not available for food ID{" "}
                        {cartItem.foodId}
                      </p>
                    </div>
                  );
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
