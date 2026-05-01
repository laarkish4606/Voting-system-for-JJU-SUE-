import React, { useState } from 'react'
import jju from "../../assets/download.jpg"
import styles from "./signup.module.scss"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast"
import { Toaster } from 'react-hot-toast'
const Signup = () => {

  const[formData, setFormData] =useState({
    username:"",
    email:"",
    password:""

  })
  const[loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) =>{
    setFormData({
      ...formData,  
      [e.target.id]: e.target.value
    })
  }
  // console.log(formData)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setLoading(true)
    try {
      const {data}=await axios.post("/api/user/register", formData)
      navigate("/login")
      console.log(data)
      toast.success("Signup successful! Please login.")
      setLoading(false)


    }catch (error) {
  const message =
    error.response?.data?.message ||
    error.message ||
    "Something went wrong";

  toast.error(message);
  setLoading(false);
}

  }



  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <img src={jju} alt="Signup" />
      </div>
       
        <div className={styles.form}>
           <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Name</label>
          <input type="text" id="username" placeholder="Username" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" onChange={handleChange} />
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
          <div className={styles.login}>
          <h2>Already have an account?</h2>
        <p>Click here to <a href="/login">Login</a></p>
        </div>
        </form>
       
        </div>
    </div>
  )
}

export default Signup