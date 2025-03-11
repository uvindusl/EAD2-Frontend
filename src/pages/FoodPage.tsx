import { useState, useEffect } from "react";
import FoodPurchasePanel from "../components/FoodPurchasePanel";
import NavBar from "../components/navBar";
import "../css/FoodPage.css";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

// Define the Food interface
interface Food {
  id: number;
  img: string;
  title: string;
  name: string;
  price: number;
  description: string;
}

function FoodPage() {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL
  const [food, setFood] = useState<Food | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sampleFood: Food = {
      id: 1,
      img: "/assets/cheezepizza.jpg",
      title: "Cheese Pizza",
      name: "Classic Cheese",
      price: 9.99,
      description:
        "Delicious pizza topped with a blend of mozzarella, cheddar, and parmesan cheese.",
    };

    setFood(sampleFood);
    setLoading(false);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginTop: "2rem" }}>
        {loading ? (
          <p>Loading food details...</p>
        ) : food ? (
          <FoodPurchasePanel food={food} />
        ) : (
          <p>Food not found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default FoodPage;
