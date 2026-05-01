import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "../../assets/log.jpg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false); // 🔥 dropdown state

  const auth = useSelector((state) => state.auth);
  const user = auth?.user;
  const role = auth?.role || localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    dispatch(logout());
    window.location.href = "/login";
  };

  // 🔥 GET FIRST LETTER
  const firstLetter = user?.username?.charAt(0)?.toUpperCase();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="logo" />
        <h1>JJU Election Portal</h1>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>

          {/* 🔐 LOGGED IN */}
          {user || role ? (
            <>
              <li><Link to="/election">Election</Link></li>

              {role === "admin" && (
                <>
                  <li><Link to="/manage">Manage</Link></li>
                  <li><Link to="/result">Result</Link></li>
                </>
              )}

              {/* 🔥 PROFILE AVATAR */}
              <li className={styles.profile}>
                <div
                  className={styles.avatar}
                  onClick={() => setOpen(!open)}
                >
                  {firstLetter || "U"}
                </div>

                {/* 🔥 DROPDOWN */}
                {open && (
                  <div className={styles.dropdown}>
                    <p>{user?.username}</p>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
