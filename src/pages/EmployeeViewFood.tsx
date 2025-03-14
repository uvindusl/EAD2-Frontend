import React, { useState, useEffect } from "react";
import FoodGrid from "../components/FoodGrid";
import "../css/EmployeeViewFood.css";
import axios from "axios";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";

interface Food {
  foodid: string;
  name: string;
  description: string;
  picture: string;
  price: number;
}
function EmployeeViewFood() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = "http://localhost:8081/food-micro/foods";

    setLoading(true);
    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          setFoods(response.data);
        } else if (response.status === 204) {
          //HTTP 204 successfully connect with the server but no data returned
          setFoods([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
        setError("Failed to load food items. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="food-grid-page">
        {loading ? (
          <p className="loading-message">Loading menu items...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="food-grid">
            {foods.map((food) => (
              <FoodGrid key={food.foodid} food={food} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default EmployeeViewFood;
