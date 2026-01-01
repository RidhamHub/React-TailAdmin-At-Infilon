import { useEffect } from "react";
import EcommTitle from "./EcommTitle";
import { DataTable } from "simple-datatables";
import { ProductListData } from "./Data";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export default function Products() {
  useEffect(() => {
    const tableElement = document.getElementById("default-table");

    if (tableElement) {
      const dataTable = new DataTable("#default-table", {
        searchable: false,
        perPageSelect: false,
      });

      return () => {
        dataTable.destroy();
      };
    }
  }, []);

  return (
    <div className="bg-[#F9FAFB]">
      <EcommTitle title="Product List " />

      <div className="m-5 bg-white  rounded-2xl border border-gray-300">
        <div className="p-5 flex justify-between">
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
              + <span className="ml-2 font-semibold"> App Product</span>
            </button>
          </div>
        </div>
        <hr className="text-gray-300" />

        <div className="flex justify-between ">
          <div className=" m-4 border border-gray-200 px-2 rounded-xl flex justify-between items-center">
            <div className="flex justify-center items-center mr-20 py-0">
              <CiSearch />
              <input
                className="border-none placeholder:text-gray-500 placeholder:text-sm"
                type="text"
                placeholder="search.."
              />
            </div>
          </div>
          <button className=" flex gap-2 items-center m-4 p-2 border rounded-md border-gray-300">
            <FaFilter /> Filter
          </button>
        </div>
        <hr className="text-gray-300" />

        <table id="default-table">
          <thead className="mt-0 ">
            <tr className="">
              {/* badha th ni style .css file ma chhe */}
              <th className="productListTh">
                <input
                  className=" border-gray-300 rounded-sm"
                  type="checkbox"
                />
              </th>
              <th>
                <span class="flex items-center mr-5">Products</span>
              </th>
              <th>
                <span className="flex items-center mr-5">Category</span>
              </th>
              <th>
                <span class="flex items-center mr-5">Brand</span>
              </th>
              <th>
                <span class="flex items-center mr-5">Price</span>
              </th>
              <th>
                <span class="flex items-center mr-5">Stock</span>
              </th>
              <th>
                <span class="flex items-center mr-5">Created At</span>
              </th>
              <th className="productListTh"> </th>
            </tr>
          </thead>
          <tbody>
            {ProductListData.map((item) => {
              const isInStock = item.Stock === "In Stock";

              const textColor = isInStock ? "text-green-700" : "text-red-700";
              const bgColor = isInStock ? "bg-green-50" : "bg-red-50";

              return (
                //   proListRow na badha td ma vertical-aligne:middle apyu chhe external file ma...
                <tr className="text-gray-500 proListRow ">
                  <td>
                    <input
                      className="border-gray-300 rounded-sm"
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <div className="flex items-center">
                      <img className=" h-15 w-15" src={item.icon} alt="" />
                      <span className="text-gray-700">{item.name}</span>
                    </div>
                  </td>
                  <td className="text-gray-700 ">{item.Categary}</td>
                  <td className="text-gray-700 ">{item.Brand} </td>
                  <td className="text-gray-700 ">${item.Price}</td>
                  <td>
                    <span
                      className={`px-2 text-xs font-medium rounded-full ${textColor} ${bgColor}`}
                    >
                      {item.Stock}
                    </span>
                  </td>
                  <td className="text-gray-700">{item.CreatedAt}</td>
                  <td >
                    <BsThreeDots />
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
