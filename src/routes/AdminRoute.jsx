import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { role } = useSelector((state) => state.auth);
  const storedRole = localStorage.getItem("role");

  const finalRole = role || storedRole;

  if (finalRole !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute;
