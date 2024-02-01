import React, { createContext, useEffect, useState } from "react";
import styles from "./ViewCategory.module.css";
import images from "../../images/quiz.jpg";
import { MdCategory, MdDelete } from "react-icons/md";
import { FaBullseye, FaEdit } from "react-icons/fa";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import axiosInstance from "../../axios/Axios";
import Swal from "sweetalert2";
import Modal from "../../components/modal/Modal";
import BasicModal from "../../components/modal/Modal";
import { Link } from "react-router-dom";
const viewCategory = createContext()

const ViewCategory = () => {

  const [categoryName, setcategoryName] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [open, setOpen] = useState(false);
  const [formData, setformData] = useState({
    category: "",
    description: "",
    id: "",
  });

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
            text: "Your Category has been deleted.",
            icon: "success",
          });
          setDeleteId(id);
        }
      });
    } catch (error) {
      console.log("this is an error message", error);
    }
  };

  const handleOpen = async (id) => {
    setOpen(true);
    try {
      const updatedData = await axiosInstance.get(`getCategory/${id}`);
      console.log("response", updatedData.data.data);
      const data = updatedData.data.data;
      setformData({
        category: data.category,
        description: data.description,
        id: data._id,
      });
    } catch (error) {
      console.log("this is an error", error);
    }
  };
  console.log("}}}}}}}}", formData);
  const handleClose = () => setOpen(false);

  const handleUpdatdata = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log("%%%%%%", formData);

  const updateCategory = async (id) => {
    setOpen(false);
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to update this category!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const body = {
            category: formData.category,
            description: formData.description,
          };
          const token = JSON.parse(localStorage.getItem("authToken"));
          const categories = await axiosInstance.put(
            `updatecategory/${id}`,
            body,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          Swal.fire({
            title: "Updated!",
            text: "Your Category has been Updated successfully.",
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
    <viewCategory.Provider categoryName={categoryName}>
      <div>
        <div className={styles.container}>
          <div className={styles.heading}>
            <MdCategory style={{ fontSize: "35px", color: "#fff" }} />
            <h1
              style={{
                color: "#fff",
                fontWeight: "bold",
                paddingTop: "0px",
                marginBlockStart: "0em",
                marginBlockEnd: "0em",
              }}
            >
              Categories
            </h1>
            <Link to="/category">
              <Button variant="contained" style={{ marginBottom: "10px" }}>
                Add Category
              </Button>
            </Link>
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
                    style={{
                      fontSize: "25px",
                      cursor: "pointer",
                      color: "red",
                    }}
                    onClick={() => handleDelete(item._id)}
                  />
                  <FaEdit
                    style={{
                      fontSize: "23px",
                      paddingLeft: "15px",
                      cursor: "pointer",
                      color: "green",
                    }}
                    onClick={() => handleOpen(item._id)}
                  />
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {open && (
        <BasicModal
          open={open}
          handleClose={handleClose}
          formData={formData}
          updateCategory={updateCategory}
          handleUpdatdata={handleUpdatdata}
        />
      )}
    </viewCategory.Provider>
  );
};

export default ViewCategory;
