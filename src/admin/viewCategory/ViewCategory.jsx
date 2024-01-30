import React, { useEffect, useState } from "react";
import styles from "./ViewCategory.module.css";
import images from "../../images/quiz.jpg";
import { MdCategory, MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import axiosInstance from "../../axios/Axios";
import Swal from "sweetalert2";

const ViewCategory = () => {
  const [categoryName, setcategoryName] = useState([]);
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("authToken"));
        const response = await axiosInstance.get("getCategories", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        console.log("!!!!!!!!", data);
        setcategoryName(data);
        setDeleteId("");
      } catch (error) {
        console.log("This is an error", error);
      }
    };

    fetchCategories();
  }, [deleteId]);
  console.log(categoryName, "@@@@@@");

  const handleDelete = (id) => {
    console.log("99999999", id);
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this category!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const token = JSON.parse(localStorage.getItem("authToken"));
          const categories = await axiosInstance.get(`getCategories/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          setDeleteId(id);
        }
      });
    } catch (error) {
      console.log("this is an error message", error);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.heading}>
          <MdCategory style={{ fontSize: "35px", color: "#fff" }} />
          <h1 style={{ color: "#fff", fontWeight: "bold", paddingTop: "0px" }}>
            Categories
          </h1>
        </div>
        <div className={styles.content}>
          {categoryName.map((item, i) => (
            <Card
              sx={{ maxWidth: 345, maxHeight: 170 }}
              style={{
                width: "270px",
                borderRadius: "15px",
                paddingLeft: "10px",
                marginLeft: "10px",
              }}
              key={i}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <MdDelete
                  style={{ fontSize: "25px", cursor: "pointer", color: "red" }}
                  onClick={() => handleDelete(item._id)}
                />
                <FaEdit
                  style={{
                    fontSize: "23px",
                    paddingLeft: "15px",
                    cursor: "pointer",
                    color: "green",
                  }}
                />
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
