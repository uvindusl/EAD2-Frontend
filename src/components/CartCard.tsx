// CartCard.tsx
import "../css/CartCard.css";

interface Cart {
  foodid: string;
  foodname: string;
  fooddescription: string;
  foodimg: string;
  qty: number;
  subtotal: number;
}

interface CartCardProps {
  cart: Cart;
}

function CartCard({ cart }: CartCardProps) {
  const imageSource = cart.foodimg
    ? `data:image/jpeg;base64,${cart.foodimg}`
    : "/placeholder.png";

  return (
    <div className="cart-card">
      <div className="cart-content">
        <div className="cart-image">
          <img
            src={imageSource}
            alt={cart.foodname}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
          />
        </div>

        <div className="cart-info">
          <h3 className="cart-title">{cart.foodname}</h3>
          <p className="cart-description">{cart.fooddescription}</p>
          <div className="cart-meta">
            <p className="cart-qty">Qty {cart.qty}</p>
            <p>Price RS. {cart.subtotal?.toFixed(2) ?? "0.00"}</p>
          </div>
        </div>

        <div className="cart-actions">
          <button className="cart-delete-button">
            <img src="../src/assets/delete.svg" alt="Delete" />
          </button>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
