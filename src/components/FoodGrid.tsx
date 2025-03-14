// CartCard.tsx
import "../css/CartCard.css";

interface Food {
  foodid: string;
  foodname: string;
  fooddescription: string;
  foodimg: string;
  qty: number;
  price: number;
}

interface FoodGridProps {
  food: Food;
}

function FoodGrid({ food }: FoodGridProps) {
  const imageSource = food.foodimg
    ? `data:image/jpeg;base64,${food.foodimg}`
    : "/placeholder.png";

  return (
    <div className="cart-card">
      <div className="cart-content">
        <div className="cart-image">
          <img
            src={imageSource}
            alt={food.foodname}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
          />
        </div>

        <div className="cart-info">
          <h3 className="cart-title">{food.foodname}</h3>
          <p className="cart-description">{food.fooddescription}</p>
          <div className="cart-meta">
            <p>Price RS. {food.price?.toFixed(2) ?? "0.00"}</p>
          </div>
        </div>

        <div className="cart-actions">
          <button className="cart-delete-button">Delete</button>
          <button className="checkout-btn">Update</button>
        </div>
      </div>
    </div>
  );
}

export default FoodGrid;
