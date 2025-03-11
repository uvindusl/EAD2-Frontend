import "../css/FoodPurchasePanel.css";
import "../assets/cheezepizza.jpg";
import { useState } from "react";

interface Food {
  id: number;
  img: string;
  title: string;
  name: string;
  price: number;
  description: string;
}

interface foodPurchasePanelProps {
  food: Food;
}

function FoodPurchasePanel(Food: foodPurchasePanelProps) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="product-card">
        <div className="product-image">
          <img src={Food.food.img} alt={Food.food.title} />
        </div>
        <div className="product-details">
          <div className="product-info">
            <div className="product-info-label">Title</div>
            <div className="product-info-value">{Food.food.title}</div>

            <div className="product-info-label">Description</div>
            <div className="product-info-value">{Food.food.description}</div>

            <div className="product-info-label">Price</div>
            <div className="product-info-value">{Food.food.price}</div>

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
                onClick={() => setCount((count) => count - 1)}
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
