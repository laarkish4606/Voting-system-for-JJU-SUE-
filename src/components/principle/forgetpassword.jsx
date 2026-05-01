import React, { useState } from "react";
import styles from "./signup.module.scss";
import axios from "axios";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "/api/user/forgot-password",
        { email }
      );

      setLoading(false);
      toast.success(data.message);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong",
        setLoading(false)
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3>Reset Password</h3>
        <h4>Enter your email</h4>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">{loading ? "sending.." : "Reset"}</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
