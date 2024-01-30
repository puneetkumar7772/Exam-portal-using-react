import React, { useState } from "react";
import styles from "./Register.module.css";
import images from "../../images/1.jpeg";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios/Axios";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/footer/Footer";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    userName: "",
    email: "",
    cochingName: "",
    password: "",
    confirmedPassword: "",
  });

  const handleChangeData = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    const body = registerData;
    try {
      console.log(axiosInstance, "$$$$$$$$$$$$$");
      if (e.target.password.value === e.target.confirmedPassword.value) {
        const data = await axiosInstance.post("registerUser", body);
        console.log("((((((((", data.error);
        console.log("99999999")
        toast.success("User registered successfully", {
          position: "top-center",
          autoClose: 5000,
        });
      }
       else {
        toast.error("not matched!", {
          position: "top-center",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.log("######", error);
    }
  };

  console.log("@@@@@@@@@@@@", registerData);
  return (
    <div>
      <div className={styles.main_form}>
        <div>
          <div>
            <img className={styles.loginimage} src={images} alt="Side Image" />
            <h3>Register Here</h3>
          </div>
        </div>
        <div style={{ marginBottom: "5%" }}>
          <div>
            <div className={styles.login_section.container}>
              <form className={styles.loginform} onSubmit={handleSubmitData}>
                <div className={styles.formgroup}>
                  <input
                    className={styles.formcontrol}
                    type="text"
                    id="text"
                    name="fullName"
                    placeholder="Full name"
                    onChange={handleChangeData}
                    required
                  />
                </div>
                <div className={styles.formgroup}>
                  <input
                    className={styles.formcontrol}
                    type="text"
                    id="Username"
                    name="userName"
                    placeholder="Username"
                    onChange={handleChangeData}
                    required
                  />
                </div>
                <div className={styles.formgroup}>
                  <input
                    className={styles.formcontrol}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    onChange={handleChangeData}
                    required
                  />
                </div>
                <div className={styles.formgroup}>
                  <input
                    className={styles.formcontrol}
                    type="text"
                    id="cochingName"
                    name="cochingName"
                    placeholder="Coching Name"
                    onChange={handleChangeData}
                    required
                  />
                </div>
                <div className={styles.formgroup}>
                  <input
                    className={styles.formcontrol}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChangeData}
                    required
                  />
                </div>
                <div className={styles.formgroup}>
                  <input
                    className={styles.formcontrol}
                    type="password"
                    id="confirmpassword"
                    name="confirmedPassword"
                    placeholder="Confirmed Password"
                    onChange={handleChangeData}
                    required
                  />
                </div>
                <button type="submit">Register</button>
                <div className={styles.signuplink}>
                  <p>
                    If you are alredy registered? <Link to="/">Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Register;
