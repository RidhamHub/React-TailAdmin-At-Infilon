import { useState } from "react";
import { Link, useNavigate } from "react-router";
import apiClient from "./config/axios";

const initialState = {
  fullName: "",
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    let res;
    try {
      res = await apiClient.post("/auth/login", formData);
      localStorage.setItem("fullName", res.data.user.fullName);
      localStorage.setItem("profileImage", res.data.user.profileImage);
      // localStorage.setItem("role", res.data.user.role);

      setFormData(initialState);

      navigate("/");
    } catch (e) {
      // console.log("error in submiting login form : ", e);
      // console.log("error in submiting login form : ", e.response.data.msg);
      if (e.response) {
        setError(e.response.data.msg)
      } else {
        setError("Something went wrong. Please try again.");
        // console.log("error : .." , e)
      }
      return;
    }

    setFormData(initialState);
    if (res.status === 200 || res.status === 201) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold">Welcome back</h1>
          <p className="text-sm text-gray-500 mt-1">
            Don’t have an account?
            <Link
              to="/auth/signup"
              className="text-blue-500 hover:underline ml-1"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email address"
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Error Message */}
          {error && (
            <div className="text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md text-sm hover:bg-blue-600 transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
