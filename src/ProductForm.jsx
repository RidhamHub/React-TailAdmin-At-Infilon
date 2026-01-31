import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const initialState = {
  imageUrl: "",
  productName: "",
  category: "",
  brand: "",
  price: "",
  stock: "In Stock",
};

function ProductForm() {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const { id } = useParams();
  const isEdit = Boolean(id);

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
    setError("");

    // Basic validation
    if (formData.price <= 0) {
      setError("Price must be greater than 0");
      return;
    }

    try {
      let res;
      if (isEdit) {
        res = await axios.put(
          `https://tailadmin-backend.vercel.app/product/edit/${id}`,
          formData,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          },
        );
        alert(`${formData.productName} updated successfully `);
      } else {
        res = await axios.post(
          "https://tailadmin-backend.vercel.app/product/create",
          formData,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          },
        );
        alert(`${formData.productName} added successfully `);
      }

      // console.log(res);
      setFormData(initialState);
      navigate("/products");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (!isEdit) return;

    const fetchproductforedit = async () => {
      try {
        const res = await axios.get(
          `https://tailadmin-backend.vercel.app/product/edit/${id}`,
          {
            withCredentials: true,
          },
        );
        setFormData(res.data.data);
      } catch (e) {
        console.log("Error in fetching data for update in form  :>> ", e);
      }
    };

    fetchproductforedit();
  }, [id, isEdit]);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-2xl mt-10 ">
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit Product" : "Add Product"}
      </h2>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <select
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {isEdit ? "Update Product" : "Create Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
