
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = Cookies.get("accessToken");
  
  if (!isAuthenticated) {
    console.log("❌ No token - redirecting to login");
  }
  // console.log(isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;

