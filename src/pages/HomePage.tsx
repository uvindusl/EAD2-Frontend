import { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import PizzaCard from "../components/PizzaCard";
//import axios from "axios";
import styled from "styled-components";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import "../css/HomePage.css";

// Define the Food interface
interface Food {
  id: number;
  img: string;
  title: string;
  name: string;
  price: number;
}

function HomePage() {
  // Use proper typing for your state variables
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     // Replace with your actual API endpoint
  //     const apiUrl = "";

  //     setLoading(true);
  //     axios
  //       .get<Food[]>(apiUrl)
  //       .then((response) => {
  //         setFoods(response.data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching food data:", error);
  //         setError("Failed to load food items. Please try again later.");
  //         setLoading(false);
  //       });
  //   }, []);

  // For testing purposes, you can use sample data
  useEffect(() => {
    // This is mock data if your API isn't ready
    const sampleFoods: Food[] = [
      {
        id: 1,
        img: "/images/pizza1.jpg",
        title: "Pepperoni Pizza",
        name: "Classic Pepperoni",
        price: 12,
      },
      {
        id: 2,
        img: "/images/pizza2.jpg",
        title: "Margherita Pizza",
        name: "Margherita Special",
        price: 10,
      },
      {
        id: 3,
        img: "/images/pizza3.jpg",
        title: "Vegetable Pizza",
        name: "Garden Veggie",
        price: 11,
      },
      {
        id: 4,
        img: "/images/pizza4.jpg",
        title: "Hawaiian Pizza",
        name: "Tropical Delight",
        price: 13,
      },
    ];

    // Comment this out when you have your real API working
    setFoods(sampleFoods);
    setLoading(false);
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
              <PizzaCard key={food.id || food.name} food={food} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

const StyledContainer = styled.div`
  padding: 2rem;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }

  .food-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    justify-items: center;
  }

  .error {
    color: red;
    text-align: center;
  }

  @media (max-width: 768px) {
    .food-grid {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 1rem;
    }
  }
`;

export default HomePage;
