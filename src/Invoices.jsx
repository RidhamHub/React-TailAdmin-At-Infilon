import EcommTitle from "./EcommTitle";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import { InvoiceData } from "./Data";
import { DataTable } from "simple-datatables";
import { BsThreeDots } from "react-icons/bs";

export default function Invoices() {
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
    <div className="bg-[#F9FAFB] pb-20">
      <EcommTitle title="Invoices" />

      <div>
        {/* 4 boxes */}
        <div className="m-7 border border-gray-300 rounded-2xl bg-white p-7  ">
          <div className="flex mb-5 items-center justify-between">
            <p className="font-semibold">Overview</p>
            <button className="text-sm font-medium text-white p-3 px-5 bg-blue-500 rounded-lg">
              + Create an Invoice
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-2xl ">
            <div className="p-5  border-b sm:border-r border-gray-200">
              <p className="text-gray-400 text-sm mb-2">Overdue</p>
              <h3 className="text-gray-800 text-3xl">$120.80</h3>
            </div>
            <div className="p-5 border-b lg:border-r border-gray-200 sm:border-b  ">
              <p className="text-gray-400 text-sm mb-2">
                Due within next 30 days
              </p>
              <h3 className="text-gray-800 text-3xl">0.00</h3>
            </div>
            <div className="p-5 border-b sm:border-r border-gray-200 ">
              <p className="text-gray-400 text-sm mb-2">
                Average time to get paid
              </p>
              <h3 className="text-gray-800 text-3xl">24 days</h3>
            </div>
            <div className="p-5 border- border-gray-200 ">
              <p className="text-gray-400 text-sm mb-2">Upcoming Payout</p>
              <h3 className="text-gray-800 text-3xl">$3,450.50</h3>
            </div>
          </div>
        </div>
        {/* second box of invoices */}
        <div className="m-5 bg-white  rounded-2xl border border-gray-300">
          <div className="p-5 flex flex-wrap gap-2 justify-between">
            <div>
              <p className="font-bold">Invoices</p>
              <p className="text-sm text-gray-500">
                Your most recent invoices list
              </p>
            </div>
            <div className="border border-gray-200 px-2 rounded-xl flex justify-between items-center">
              <div className="flex justify-center items-center">
                <CiSearch />
                <input
                  className="border-none placeholder:text-gray-500 placeholder:text-sm"
                  type="text"
                  placeholder="search..."
                />
              </div>
            </div>
            <div className="flex gap-2 text-sm">
              <button className="p-3 flex items-center border border-gray-300 rounded-lg ">
                + Filter
              </button>
              <button className="p-3 flex items-center border border-gray-300 rounded-lg ">
                Export <FiDownload />
              </button>
            </div>
          </div>
          <hr className="text-gray-300" />

          <table id="default-table">
            <thead className="mt-0 ">
              <tr>
                {/* badha th ni style .css file ma chhe */}
                {/* productListTh clas ni baju ma sorting icons no dekhay  */}
                <th className="productListTh">
                  <input
                    className=" border-gray-300 rounded-sm"
                    type="checkbox"
                  />
                </th>
                <th>
                  <span class="flex items-center mr-5">Invoice Number</span>
                </th>
                <th>
                  <span className="flex items-center mr-5">Customer</span>
                </th>
                <th>
                  <span class="flex items-center mr-5">Creation Date</span>
                </th>
                <th>
                  <span class="flex items-center mr-5">Due Date</span>
                </th>
                <th>
                  <span class="flex items-center mr-5">Total</span>
                </th>
                <th>
                  <span class="flex items-center mr-5">Status</span>
                </th>
                <th className="productListTh"> </th>
              </tr>
            </thead>
            <tbody>
              {InvoiceData.map((item) => {
                const isInStock = item.status === "Paid";

                const textColor = isInStock ? "text-green-600" : "text-red-600";
                const bgColor = isInStock ? "bg-green-50" : "bg-red-50";

                return (
                  //   proListRow na badha td ma vertical-aligne:middle apyu chhe external file ma...
                  <tr className="text-xs  text-gray-800 proListRow ">
                    <td>
                      <input
                        className="border-gray-300 rounded-sm"
                        type="checkbox"
                      />
                    </td>
                    <td className="font-medium text-gray-800 ">#{item.inum}</td>
                    <td className="font-medium">{item.cname}</td>
                    <td>{item.cDate} </td>
                    <td>{item.dDate}</td>
                    <td>${item.price}</td>

                    <td>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${textColor} ${bgColor}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <BsThreeDots />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
