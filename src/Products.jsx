import { useEffect, useState } from "react";
import EcommTitle from "./EcommTitle";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import apiClient from "./config/axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode";

export default function Products() {
  const [products, setProducts] = useState([]);
  // const role = localStorage.getItem("role");

  const token = Cookies.get("accessToken");
  // console.log(token);
  
  const decoded = jwtDecode(token);
  // console.log(decoded);

  const role = decoded.role;
  

  // console.log(document.Cookie);

 const alldata = async () => {
   try {
     const res = await apiClient.get("/product");
     // console.log("product data : ", res);
     setProducts(res.data);
   } catch (error) {
     console.log("g0t error to get all data : ", error);
   }
 };
  useEffect(() => {
    alldata();
  }, []);

  const handleDelProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delet the product")) return;

    try {
      const res = await apiClient.post(`/product/del/${id}`, {});
      alldata(); //for reload products
    } catch (e) {
      console.log("Error in delete of product : ", e);

      if (e.response && e.response.status === 403) {
        alert(e.response.data.msg); // "Accey ss Denied, Onlyadmin..."
      } else {
        alert("Failed to delete product");
      }
    }
  };

  return (
    <div className="bg-[#F9FAFB] pb-20">
      <EcommTitle title="Product List " />

      <div className="m-5 bg-white  rounded-2xl border border-gray-300">
        <div className="p-5 flex flex-wrap gap-2 justify-between">
          <div>
            <p className="font-bold">Products List</p>
            <p className="text-sm text-gray-500">
              Track your store's progress to boost your sales.
            </p>
          </div>
          <div className="flex gap-2 text-sm">
            <button className="p-3 flex items-center border border-gray-300 rounded-lg ">
              Export <FiDownload />
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white border rounded-lg p-3">
              +
              <a href="/product-form" className="ml-2 font-semibold">
                Add Product
              </a>
            </button>
          </div>
        </div>
        <hr className="text-gray-300" />

        <div className="sm:flex justify-between ">
          <div className=" m-4 border border-gray-200 px-2 rounded-xl flex justify-between items-center">
            <div className="flex justify-center items-center">
              <CiSearch />
              <input
                className="border-none placeholder:text-gray-500 placeholder:text-sm"
                type="text"
                placeholder="search..."
              />
            </div>
          </div>
          <button className=" flex gap-2 items-center m-4 p-2 border rounded-md border-gray-300">
            <FaFilter /> Filter
          </button>
        </div>
        <hr className="text-gray-300" />

        <table className="w-full protable" id="default-table">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="pl-6 py-4 text-left w-10">
                <input
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  type="checkbox"
                />
              </th>

              <th className="px-3 py-4">
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Product
                </span>
              </th>

              <th className="px-3 py-4">
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Category
                </span>
              </th>

              <th className="px-3 py-4">
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Brand
                </span>
              </th>

              <th className="px-3 py-4">
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Price
                </span>
              </th>

              <th className="px-3 py-4">
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Stock Status
                </span>
              </th>

              <th className="px-3 py-4">
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Date Added
                </span>
              </th>

              <th className="pr-6 py-4 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Actions
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((item, index) => {
              const isInStock = item.stock === "In Stock";

              const textColor = isInStock ? "text-green-700" : "text-red-700";
              const bgColor = isInStock ? "bg-green-50" : "bg-red-50";
              return (
                <tr key={item._id} className="border-b border-gray-100 ">
                  <td className="pl-6 py-4">
                    <input
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                      type="checkbox"
                    />
                  </td>

                  <td className="py-4 px-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                        <img
                          className="h-full w-full object-cover"
                          src={item.imageUrl}
                          alt={item.productName}
                        />
                      </div>
                      <span className="font-medium text-gray-900 text-sm">
                        {item.productName}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-3 text-sm text-gray-600">
                    {item.category}
                  </td>
                  <td className="py-4 px-3 text-sm text-gray-600">
                    {item.brand}
                  </td>
                  <td className="py-4 px-3 text-sm font-semibold text-gray-900">
                    ₹{item.price.toLocaleString()}
                  </td>

                  <td className="py-4 px-3 ">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${textColor} ${bgColor}`}
                    >
                      {item.stock}
                    </span>
                  </td>

                  <td className="py-4 px-3 text-sm text-center text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2 ">
                      <Link to={`/product-form/edit/${item._id}`}>
                        <button className="inline-flex items-center px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-blue-300 transition-all shadow-sm">
                          Edit
                        </button>
                      </Link>
                      {
                        (role == "admin") &&
                      <button
                        type="button"
                        onClick={() => handleDelProduct(item._id)}
                        className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-all"
                      >
                        Delete
                      </button>
                      } 
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
