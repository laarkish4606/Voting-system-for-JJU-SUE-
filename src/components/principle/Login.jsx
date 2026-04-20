import React from 'react'
import jju from "../../assets/download.jpg"
import styles from "./signup.module.scss"
const Login = () => {
  return (
     <div className={styles.container}>
       <div className={styles.logo}>
       <img src={jju} alt="Signup" />
       </div> 
         <div className={styles.form}>
            <h3>well come back!</h3>
            <h4>Sign in to get started</h4>
         <form>
           <label htmlFor="email">Email</label>
           <input type="email" id="email" placeholder="Email" />
           <label htmlFor="password">Password</label>
           <input type="password" id="password" placeholder="Password" />
           <button type="submit">Login</button>
           <div className={styles.login}>
         <p> <a href="/login">foget password?</a></p>
         </div>
         </form>
        
         </div>
     </div>
   )
}

export default Login