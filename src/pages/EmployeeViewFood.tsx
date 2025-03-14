import React, { useState, useEffect } from "react";
import FoodGrid from "../components/FoodGrid";
import "../css/EmployeeViewFood.css";
import axios from "axios";

interface Food {
  foodid: string;
  foodname: string;
  fooddescription: string;
  foodimg: string;
  qty: number;
  price: number;
}

function EmployeeViewFood() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const customerid = sessionStorage.getItem("customerId");
  console.log("Customer ID: ", customerid);

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
    <div className="food-grid-page">
      {foods.map((food) => (
        <FoodGrid key={food.foodid} food={food} />
      ))}
    </div>
  );
}

export default EmployeeViewFood;
