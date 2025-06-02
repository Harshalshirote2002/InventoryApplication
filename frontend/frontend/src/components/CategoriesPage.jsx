import "./styles/categories.css";
import { useState, useEffect } from "react";

function PopulateCategories() {
  useEffect(() => {
    // This is where you would fetch categories from the backend
    // For example:
    fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => {
        console.error("Error fetching categories:", error);
        setItems([]); // Fallback to initial items if fetch fails
      });
  }
  , []);
  // Simulating fetching categories
  const [items, setItems] = useState([]);
  return (
    <>
      {items.length !=0 ? items.map((i) => (
        <div className="categories-card">
          <p className="category-name">{i.categoryname}</p>
          <p className="category-quantity">{i.numberofitems}</p>
        </div>
      )) : <p className="loadingScreen">Loading...</p>}
    </>
  );
}

export default function CategoriesPage() {
  return (
    <div className="categories">
      <div className="categories-title">Categories</div>
      <div className="categories-container">
        <PopulateCategories />
      </div>
    </div>
  );
}
