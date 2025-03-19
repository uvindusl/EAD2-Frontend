import React, { useState } from "react";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import "../css/AddFood.css";

const AddFood: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle Form Submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("name", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("picture", image);

    try {
      const response = await fetch("http://localhost:8081/food-micro/foods", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Food item added successfully!");
        setTitle("");
        setDescription("");
        setPrice("");
        setImage(null);
        setPreview(null);
      } else {
        alert("Failed to add food item.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the food item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="add-food-container">
        <div className="form-box">
          <h2 className="form-title">Add Food</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="form-left">
                <label className="input-label">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input-field"
                  required
                  pattern="[A-Za-z]*"
                />

                <label className="input-label">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea-field"
                  required
                ></textarea>

                <label className="input-label">Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*\.?\d{0,2}$/.test(value)) {
                      setPrice(value);
                    }
                  }}
                  className="input-field"
                  required
                />

                <div className="button-group">
                  <button
                    type="submit"
                    className="save-button"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => {}}
                  >
                    Cancel
                  </button>
                </div>
              </div>

              <div className="form-right">
                <label className="input-label">Image</label>
                <div className="image-box">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="image-preview"
                    />
                  ) : (
                    <p className="image-placeholder">Upload an Image</p>
                  )}
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddFood;
