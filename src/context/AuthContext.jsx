import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(localStorage.getItem("accessToken"));


  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/auth/me`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        },
      );
      setUser(res.data);
    } catch (error) {
      // If access token expired, try to refresh it
      if (error.response?.status === 401) {
        try {
          const refreshRes = await axios.post(
            `${API_BASE_URL}/auth/refresh`,
            {
              refreshToken: localStorage.getItem("refreshToken")
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("refreshToken")}`
              }
            }
          );
          // Update access token in localStorage if returned
          if (refreshRes.data.accessToken) {
            localStorage.setItem("accessToken", refreshRes.data.accessToken);
          }
          // Retry fetching user after refresh
          const retryRes = await axios.get(
            `${API_BASE_URL}/auth/me`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
          }
          );
          setUser(retryRes.data);
        } catch (refreshError) {
          // Refresh failed, user needs to login again
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
