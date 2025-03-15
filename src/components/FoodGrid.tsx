import "../css/FoodGrid.css";

interface Food {
  foodId: string;
  name: string;
  description: string;
  picture: string;
  price: number;
}

interface FoodGridProps {
  handleDeleteClick: (foodId: string) => void;
  food: Food;
}

function FoodGrid({ food, handleDeleteClick }: FoodGridProps) {
  const imageSource = food.picture
    ? `data:image/jpeg;base64,${food.picture}`
    : "/placeholder.png";

  return (
    <div className="food-card">
      <div className="food-content">
        <div className="food-info">
          <h3 className="food-title">{food.name}</h3>
          <p className="food-description">{food.description}</p>
        </div>
        <div className="food-price">
          <p>Rs. {food.price?.toFixed(2) ?? "0.00"}</p>
        </div>
        <div className="food-image">
          <img
            src={imageSource}
            alt={food.name}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
          />
        </div>
        <div className="food-actions">
          <button className="food-checkout-btn">Edit</button>
          <button
            className="food-delete-button"
            onClick={() => handleDeleteClick(food.foodId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodGrid;
