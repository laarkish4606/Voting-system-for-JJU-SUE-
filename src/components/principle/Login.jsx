import React, { useState } from "react";
import jju from "../../assets/download.jpg";
import styles from "./signup.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/authSlice";
import { Link } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("/api/user/login", formData);

      console.log("LOGIN RESPONSE:", data);

      //  SAVE USER TO REDUX RBAC
      dispatch(
        setUser({
          user: data,
          token: data.token,
          role: data.role,
        })
      );

      
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      toast.success("Login successful");

      setLoading(false);

      

     
      const role = data?.role;

      console.log("ROLE:", role);

      if (role === "admin") {
        console.log("GOING TO: /manage");
        navigate("/manage");
      } else {
        console.log("GOING TO: /election");
        navigate("/election");
      }

    } catch (error) {
      console.log(error);

      const message =
        error.response?.data?.message || "Login failed";

      toast.error(message);
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={jju} alt="Signup" />
      </div>

      <div className={styles.form}>
        <h3>Welcome back!</h3>
        <h4>Sign in to get started</h4>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>

          <div className={styles.login}>
            <p>
             <Link to="/forgetpassword">forgot password?</Link>

            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
