import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.brand}>
          <h2>JJU Voting System</h2>
          <p>
            Secure, transparent, and easy online voting system for 
            Jigjiga University student union elections.
          </p>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/election">Election</a>
          <a href="/result">Results</a>
          {/* <a href="/login">Login</a> */}
            </div>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>Email: jju@university.edu</p>
          <p>Phone: +251 902276248</p>
        </div>

      </div>

  
      <div className={styles.bottom}>
        © 2026 Jigjiga University | Student Union Election Committee
      </div>

    </footer>
  );
};

export default Footer;
