import React, { useEffect, useState } from "react";
import styles from "./AddCategory.module.css";
import axiosInstance from "../../axios/Axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AddCategory = () => {
  const [category, setcategory] = useState({ category: "", description: "" });
  const [authtoken, setauthtoken] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    setauthtoken(token);
  }, []);
  console.log("hgvjbk.nl/", authtoken);

  const handleChange = (e) => {
    setcategory({ ...category, [e.target.name]: e.target.value });
  };
  console.log(category);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = category;
    try {
      const categroyData = await axiosInstance.post("/addCategory", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authtoken}`,
        },
      });
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Category added successfully",
        showConfirmButton: false,
        timer: 1500
      });
      setcategory({ category: "", description: "" });
      console.log("this is response", categroyData);
    } catch (error) {
      console.log("this is error", error);
    }
  };

  return (
    <div>
      <h1>Add New Categories</h1>
      <Link to="/viewCategory">View</Link>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <label>Category:</label>
          <div>
            <input
              type="text"
              id="category"
              name="category"
              value={category.category}
              placeholder="Category Name"
              required
              onChange={handleChange}
            />
          </div>
          <label>Description:</label>
          <div>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Description"
              value={category.description}
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <button className={styles.submit} type="submit">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
