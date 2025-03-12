import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import "../css/CartPage.css";
import CartCard from "../components/CartCard";

function CartPage() {
  return (
    <div className="cart-container">
      <NavBar />
      <div className="cart-main-content">
        <div className="cart-items-section">
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
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </div>

        <div className="order-summary-section">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span className="summary-value">3</span>
          </div>

          <div className="summary-row">
            <span>Quantity</span>
            <span className="summary-value">4</span>
          </div>

          <div className="summary-row sub-total">
            <span>Sub Total</span>
            <span className="summary-value">1200/=</span>
          </div>

          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
