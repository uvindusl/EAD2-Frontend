import "../css/FoodPurchasePanel.css";
import { useState } from "react";

interface Food {
  id: number;
  picture: string; // Base64 string for the image
  name: string;
  price: number;
  description: string;
}

interface FoodPurchasePanelProps {
  food: Food;
}

function FoodPurchasePanel({ food }: FoodPurchasePanelProps) {
  const [count, setCount] = useState(0);

  const imageSource = food.picture
    ? `data:image/jpeg;base64,${food.picture}`
    : "/placeholder.png";

  return (
    <div>
      <div className="product-card">
        <div className="product-image">
          <img src={imageSource} alt={food.name} />
        </div>
        <div className="product-details">
          <div className="product-info">
            <div className="product-info-label">Name</div>
            <div className="product-info-value">{food.name}</div>

            <div className="product-info-label">Description</div>
            <div className="product-info-value">{food.description}</div>

            <div className="product-info-label">Price</div>
            <div className="product-info-value">{food.price}</div>

            <div className="product-info-label">Quantity</div>
            <div className="quantity-selector">
              <button
                className="btn1"
                onClick={() => setCount((count) => count + 1)}
              >
                +
              </button>
              <button
                className="btn1"
                onClick={() => setCount((count) => (count > 0 ? count - 1 : 0))}
              >
                -
              </button>
              {count}
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
