import { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import PizzaCard from "../components/PizzaCard";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import "../css/HomePage.css";
import axios from "axios";

// Define the Food interface
interface Food {
  id: number;
  imageData: string; // Base64 string for the image
  name: string;
  price: number;
}

function HomePage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/food-micro/foods";

    setLoading(true);
    axios
      .get(apiUrl)
      .then(async (response) => {
        // Fetch food data first
        const foodsWithoutImages = response.data;

        // Then fetch images for each food item
        const foodPromises = foodsWithoutImages.map(async (food: any) => {
          try {
            // Get the base64 image data
            const imageResponse = await axios.get(
              `http://localhost:8080/foods/${food.id}/image/base64`
            );
            return {
              id: food.id,
              name: food.name,
              price: food.price,
              imageData: imageResponse.data, // Store the base64 string
            };
          } catch (err) {
            console.error(`Error fetching image for food ${food.id}:`, err);
            return {
              id: food.id,
              name: food.name,
              price: food.price,
              imageData: null, // No image available
            };
          }
        });

        // Wait for all image requests to complete
        const foodData = await Promise.all(foodPromises);
        setFoods(foodData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
        setError("Failed to load food items. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <NavBar />
      <div className="home-container">
        <h1 className="home-title">Our Pizza Menu</h1>
        <div className="search-wrapper">
          <SearchBar />
        </div>
        {loading ? (
          <p className="loading-message">Loading menu items...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="food-grid">
            {foods.map((food) => (
              <PizzaCard key={food.id} food={food} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
