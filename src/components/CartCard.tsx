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
  const imageSource = cart.foodimg.startsWith("data:image")
    ? cart.foodimg
    : "/placeholder.png";

  return (
    <div className="cart-card">
      <div className="cart-content">
        <div className="cart-info">
          <h3 className="cart-title">{cart.foodname}</h3>
          <p className="cart-description">{cart.fooddescription}</p>
          <p className="cart-price">
            Price: ${cart.subtotal?.toFixed(2) ?? "0.00"}
          </p>
          <p className="cart-qty">Qty: {cart.qty}</p>
        </div>

        <div className="cart-actions">
          <button className="cart-delete-button">
            <img src="/assets/delete.svg" alt="Delete" />
          </button>

          <div className="cart-image">
            <img
              src={imageSource}
              alt={cart.foodname}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.png";
              }}
            />
          </div>

          <input type="checkbox" className="cart-select" />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
