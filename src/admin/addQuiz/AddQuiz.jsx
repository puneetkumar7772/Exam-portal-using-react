import React, { useContext, useEffect, useState } from "react";
import styles from "./AddQuiz.module.css";
import axiosInstance from "../../axios/Axios";
import ViewCategory from "../viewCategory/ViewCategory";

const AddQuiz = () => {
  const categoryName = useContext(ViewCategory);
  const [category, setCategory] = useState([]);
  const [quizData, setQuizData] = useState({
    quizzeTitle: "",
    numberOfQuestion: "",
    maxMark: "",
    quizzeDescription: "",
    status: "",
    category: "",
  });
  console.log("5555555555", categoryName);

  useEffect(() => {
    const fetchCategroy = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("authToken"));
        const categoryData = await axiosInstance.get("getCategories", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const value = categoryData.data;
        console.log("!!!!!!", categoryData);
        setCategory(value);
      } catch (error) {
        console.log("this is an server error", error);
      }
    };
    fetchCategroy();
  }, []);

  const handlaChangeData = (e) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value });
  };

  console.log("$$$$$$$$", quizData);

  const submitQuizData = async (e) => {
    e.preventDefault();
    try {
      const body = quizData;
      const token = JSON.parse(localStorage.getItem("authToken"));
      const quizesData = await axiosInstance.post("addQuizze", body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("&&&&&&&", quizesData);
    } catch (error) {
      console.log("this is an error", error);
    }
  };

  return (
    <div>
      <h1 style={{ color: "#fff" }}>Add Quiz</h1>
      <div className={styles.main}>
        <form onSubmit={submitQuizData}>
          <div>
            <input
            type="text"
              id="title"
              name="quizzeTitle"
              value={quizData.quizzeTitle}
              placeholder="Enter Quiz Title"
              onChange={handlaChangeData}
            />
          </div>
          <div className={styles.input_field}>
            <input
              type="number"
              name="numberOfQuestion"
              value={quizData.numberOfQuestion}
              placeholder="Enter No.Of Question"
              onChange={handlaChangeData}
            />
            <input
              type="number"
              name="maxMark"
              value={quizData.maxMark}
              placeholder="Enter Max.marks"
              onChange={handlaChangeData}
            />
          </div>
          <div>
            <textarea
              id="description"
              name="quizzeDescription"
              value={quizData.quizzeDescription}
              rows="4"
              placeholder="Enter Quiz Description"
              onChange={handlaChangeData}
            ></textarea>
          </div>

          <div className={styles.input_field}>
            <input
              className={styles.check}
              type="radio"
              name="status"
              id="check1"
              value={true}
              onChange={handlaChangeData}
            />
            <span>Active</span>
            <input
              className={styles.check}
              type="radio"
              name="status"
              id="check2"
              value={false}
              onChange={handlaChangeData}
            />
            <span>In Active</span>
          </div>
          <div>
            <select
              name="category"
              onChange={handlaChangeData}
              value={quizData.category}
              id=""
            >
              <option value="" style={{ color: "gray" }}>
                Select Category
              </option>
              {category.length > 0 &&
                category.map((item) => (
                  <option name="category">{item.category}</option>
                ))}
            </select>
          </div>
          <button className={styles.submit} type="submit">
            Add Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuiz;
