import { useEffect, useState } from "react";
import EcommTitle from "./EcommTitle";
import { DataTable } from "simple-datatables";
import { ProductListData } from "./Data";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const alldata = async () => {
      try {
        const res = await axios.get("http://localhost:7000/product");
        console.log("product data : ", res);
        setProducts(res.data);
      } catch (error) {
        console.log("g0t error to get all data : ", error);
      }
    };

    alldata();
  }, []);

  useEffect(() => {
    
    // const tableElement = document.getElementById("default-table");
    // if (tableElement) {
    // const dataTable = new DataTable("#default-table", { searchable: false, perPageSelect: false, });

    if (products.length === 0) return;

    const dataTable = new DataTable("#default-table", {
      searchable: false,
      perPageSelect: false,
    });

    return () => {
      dataTable.destroy();
    };
  }, [products]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F9FAFB]">
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
            <button className="bg-blue-500  text-white border rounded-lg p-3">
              +
              <a href="/add-product" className="ml-2 font-semibold">
                App Product
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

        <table className="protable" id="default-table">
          <thead className="mt-0 ">
            <tr className="">
              {/* badha th ni style .css file ma chhe */}
              {/* productListTh clas ni baju ma sorting icons no dekhay  */}
              <th className="productListTh">
                <input
                  className=" border-gray-300 rounded-sm"
                  type="checkbox"
                />
              </th>
              <th>
                <span className="flex items-center mr-5">Products</span>
              </th>
              <th>
                <span className="flex items-center mr-5">Category</span>
              </th>
              <th>
                <span className="flex items-center mr-5">Brand</span>
              </th>
              <th>
                <span className="flex items-center mr-5">Price</span>
              </th>
              <th>
                <span className="flex items-center mr-5">Stock</span>
              </th>
              <th>
                <span className="flex items-center mr-5">Created At</span>
              </th>
              <th className="productListTh"> </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              const isInStock = item.stock === "In Stock";

              const textColor = isInStock ? "text-green-700" : "text-red-700";
              const bgColor = isInStock ? "bg-green-50" : "bg-red-50";

              return (
                <tr key={item._id} className="text-gray-500 proListRow">
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>
                    <div className="flex items-center gap-2">
                      <img className="h-10 w-10" src={item.imageUrl} alt="" />
                      <span className="text-gray-700">{item.productName}</span>
                    </div>
                  </td>

                  <td>{item.category}</td>
                  <td>{item.brand}</td>
                  <td>₹{item.price}</td>

                  <td>
                    <span
                      className={`${textColor} ${bgColor} px-2 text-xs rounded-full`}
                    >
                      {item.stock}
                    </span>
                  </td>

                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>

                  <td
                    className="px-4 py-2 text-right cursor-pointer"
                    onClick={() => alert("TD CLICKED")}
                  >
                    CLICK ME
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
