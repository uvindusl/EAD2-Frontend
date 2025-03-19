import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import axios from "axios";
import "../css/UpdateFood.css";

const UpdateFood: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [food, setFood] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:8081/food-micro/foods/${id}`).then((res) => {
      setFood(res.data);
      setPreview(
        res.data.picture ? `data:image/jpeg;base64,${res.data.picture}` : null
      );
    });
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", food.name);
    formData.append("description", food.description);
    formData.append("price", food.price);
    if (image) formData.append("picture", image);

    try {
      await axios.put(
        `http://localhost:8081/food-micro/foods/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Food updated!");
      navigate("/admin/view/foods");
    } catch (error) {
      console.error("Error updating food:", error);
      alert("Failed to update food.");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="update-food-container">
        <h2>Update Food</h2>
        <form onSubmit={handleUpdate}>
          <label>Title:</label>
          <input
            type="text"
            value={food.name}
            onChange={(e) => setFood({ ...food, name: e.target.value })}
            required
          />

          <label>Description:</label>
          <textarea
            value={food.description}
            onChange={(e) => setFood({ ...food, description: e.target.value })}
            required
          ></textarea>

          <label>Price:</label>
          <input
            type="number"
            value={food.price}
            onChange={(e) => setFood({ ...food, price: e.target.value })}
            required
          />

          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files![0])}
          />
          {preview && (
            <img src={preview} alt="Preview" className="image-preview" />
          )}

          <button type="submit">Update</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateFood;
