import "../css/CartCard.css";

function CartCard() {
  return (
    <div className="cart-card">
      <div className="cart-content">
        <div className="cart-info">
          <h3 className="cart-title">Thanduri chicken chili pizza</h3>
          <p className="cart-description">Extra cheese and peporoni</p>
          <p className="cart-price">Rs. 1200</p>
        </div>
        <div className="cart-actions">
          <button className="cart-delete-button">
            <img src="../src/assets/delete.svg" alt="delete" />
          </button>
          <div className="cart-image">
            <img
              src="../src/assets/cheezepizza.jpg"
              alt="Thanduri chicken chili pizza"
            />
          </div>
          <input type="checkbox" className="cart-select" />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
