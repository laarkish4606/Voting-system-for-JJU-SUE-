import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "../../assets/log.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="logo" />
        <h1>JJU Election Portal</h1>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/election">Election</Link></li>
          <li><Link to="/manage" className={styles.manage}>Manage</Link></li>
          <li><Link to="/result" className={styles.result}>Result</Link></li>
          <li><Link to="/signup" className={styles.getStarted}>Get started</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
