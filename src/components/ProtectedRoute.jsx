import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log("AUTH STATE:", user, loading);

  if (loading) return null;

  return user ? children : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
