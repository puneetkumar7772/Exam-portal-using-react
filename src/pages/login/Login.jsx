import React, { useState } from "react";
import styles from "./Login.module.css";
import images from "../../images/7.jpg";
import { Link } from "react-router-dom";
import Register from "../register/Register";

const Login = () => {
  const [loginValue, setLoginValue] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };
  console.log("!!!!!!!!!!", loginValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("!!!!!!!");
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
                      className={styles.formcontrol}
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
                      className={styles.formcontrol}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={loginValue.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit">Login</button>
                  <div className={styles.signuplink}>
                    <p>
                      If you are not registered? <Link to='/register'>Register</Link>
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
