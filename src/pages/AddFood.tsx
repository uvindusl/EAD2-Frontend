import React, { useState } from "react";
import NavBar from "../components/navBar"; // Import Navbar component
import Footer from "../components/Footer"; // Import Footer component
import "../css/AddFood.css"; // Import the CSS file

const AddFood: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ title, description, price, image });
    alert("Food item added!");
  };

  return (
    <div>
      {/* Navbar */}
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
                  <button type="submit" className="save-button">
                    Save
                  </button>
                  <button type="button" className="cancel-button">
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddFood;
