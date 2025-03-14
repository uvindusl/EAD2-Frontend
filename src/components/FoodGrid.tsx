import "../css/FoodGrid.css";

interface Food {
  foodid: string;
  name: string;
  description: string;
  picture: string;
  price: number;
}

interface FoodGridProps {
  food: Food;
}

function FoodGrid({ food }: FoodGridProps) {
  const imageSource = food.picture
    ? `data:image/jpeg;base64,${food.picture}`
    : "/placeholder.png";

  return (
    <div className="cart-card">
      <div className="cart-content">
        <div className="cart-info">
          <h3 className="cart-title">{food.name}</h3>
          <p className="cart-description">{food.description}</p>
        </div>
        <div className="cart-price">
          <p>Rs. {food.price?.toFixed(2) ?? "0.00"}</p>
        </div>
        <div className="cart-image">
          <img
            src={imageSource}
            alt={food.name}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
          />
        </div>
        <div className="cart-actions">
          <button className="checkout-btn">Edit</button>
          <button className="cart-delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default FoodGrid;
