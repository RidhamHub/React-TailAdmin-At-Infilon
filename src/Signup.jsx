import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const initialState = {
  fullName: "",
  email: "",
  password: "",
};

function Signup() {
  const [formData, setFormData] = useState(initialState);
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be smaller than 2MB");
      e.target.value = "";
      return;
    }

    setProfileImage(file);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("profileImage", profileImage);

    let res;
    try {
      res = await axios.post("http://localhost:7000/auth/signup", data, {
        withCredentials: true, // important if backend sets cookies
      });

      alert("user created successfully.")
    } catch (e) {
      // console.log("error in submiting signup form from frontend: ", e);
      // console.log("DATA:", e.response?.data?.msg  );
      setError(e.response?.data?.msg);
      return;
    }

    setFormData(initialState);
    
    if (res.status === 200 || res.status === 201) {
      navigate("/auth/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold">Create your account</h1>
          <p className="text-sm text-gray-500 mt-1">
            Already have an account?
            <Link
              to="/auth/login"
              className="text-blue-500 hover:underline ml-1"
            >
              Log in
            </Link>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Full name"
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

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

          <input
            type="file"
            onChange={handleFileChange}
            required
            className="w-full border px-3 py-2 rounded-md text-sm bg-white"
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
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
