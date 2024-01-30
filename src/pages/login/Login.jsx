import React, { useState } from "react";
import styles from "./Login.module.css";
import images from "../../images/7.jpg";
import { Link, useNavigate } from "react-router-dom";
import Register from "../register/Register";
import axiosInstance from "../../axios/Axios";

const userId = 123;

const Login = () => {
  const [loginValue, setLoginValue] = useState({ email: "", password: "" });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };
  console.log("!!!!!!!!!!", loginValue);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("!!!!!!!");
    const body = loginValue;
    try {
      const login = await axiosInstance.post("loginUser", body, {});
      console.log(login.data.token, "sasfDZ,sdzefsd");
      localStorage.setItem("authToken", JSON.stringify(login.data.token));
      localStorage.setItem("role", JSON.stringify(login.data.user.role));
      const role = login.data.user.role;
      console.log(role, "efsdwesdefsdfds");
      if (role === "admin") {
        console.log("ffffffffffffffff");
        Navigate("/category");
      } else {
        console.log("jghkjl;");
        Navigate("/");
      }
    } catch (error) {
      console.log("fetching login error", error);
    }
  };

  return (
    <div>
      <div>
        <div className={styles.main_form}>
          <div>
            <div>
              <img
                className={styles.loginimage}
                src={images}
                alt="Side Image"
              />
              <h3>Login Here</h3>
            </div>
          </div>
          <div style={{ marginBottom: "5%" }}>
            <div>
              <div className={styles.login_section.container}>
                <form className={styles.loginform} onSubmit={handleSubmit}>
                  <div className={styles.formgroup}>
                    <input
                      className={`${styles.formcontrol} ${styles.input_text}`}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email"
                      value={loginValue.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formgroup}>
                    <input
                      className={`${styles.formcontrol} ${styles.input_text}`}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={loginValue.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button className={styles.login} type="submit">
                    Login
                  </button>
                  <div className={styles.signuplink}>
                    <p>
                      If you are not registered?{" "}
                      <Link to={`/register/${userId}`}>Register</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
