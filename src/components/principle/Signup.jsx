import React from 'react'
import jju from "../../assets/download.jpg"
import styles from "./signup.module.scss"
const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <img src={jju} alt="Signup" />
      </div>
       
        <div className={styles.form}>
           <h1>Signup</h1>
        <form>
          <label htmlFor="username">Name</label>
          <input type="text" id="username" placeholder="Username" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
          <button type="submit">Signup</button>
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