import "../css/FoodPurchasePanel.css";
import "../assets/cheezepizza.jpg";
function FoodPurchasePanel() {
  return (
    <div>
      <div className="product-card">
        <div className="product-image"></div>
        <div className="product-details">
          <div className="product-info">
            <div className="product-info-label">Title</div>
            <div className="product-info-value">Pizza</div>

            <div className="product-info-label">Description</div>
            <div className="product-info-value">Extra cheese</div>

            <div className="product-info-label">Price</div>
            <div className="product-info-value">1200.00</div>

            <div className="product-info-label">Quantity</div>
            <div className="quantity-selector">
              <button className="quantity-button">+</button>
            </div>
          </div>

          <div className="product-actions">
            <button className="action-button buy-now">Buy Now</button>
            <button className="action-button add-to-cart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FoodPurchasePanel;
