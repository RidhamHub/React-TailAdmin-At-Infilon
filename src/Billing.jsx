import EcommTitle from "./EcommTitle";
import ProgressBar from "./ProgressBar";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { InvoiceData } from "./Data";
import { FaEye } from "react-icons/fa";
import { DataTable } from "simple-datatables";
import { useEffect } from "react";


export default function Billing() {
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
      <EcommTitle title="Billing" />
      <div className="p-7">
        {/* Plan Details and Billing Info */}
        <div className="flex ">
          {/* plan Billing */}
          <div className=" bg-white border  border-gray-300 rounded-2xl mt-0 ">
            <div className="p-5 font-medium text-lg text-gray-800   ">
              <p>Products Description</p>
            </div>
            <hr className="border-gray-300" />
            <div className="grid grid-cols-2 p-5">
              <div className="border border-gray-300 rounded-2xl mr-4">
                <ul className="p-5">
                  <li>
                    <p className="text-sm font-normal text-gray-500">
                      Current Plan
                    </p>
                    <p className="text-sm font-medium text-gray-700">
                      Professional
                    </p>
                    <hr className="my-3 border-gray-100" />
                  </li>
                  <li>
                    <p className="text-sm font-normal text-gray-500">
                      Monthly Limits
                    </p>
                    <p className="text-sm font-medium text-gray-700">
                      25,000 Orders
                    </p>
                    <hr className="my-3 border-gray-100" />
                  </li>
                  <li>
                    <p className="text-sm font-normal text-gray-500">Cost</p>
                    <p className="text-sm font-medium text-gray-700">
                      $199.00 <span className="text-gray-500">/month</span>
                    </p>
                    <hr className="my-3 border-gray-100" />
                  </li>
                  <li>
                    <p className="text-sm font-normal text-gray-500">
                      Renewal Date
                    </p>
                    <p className="text-sm font-medium text-gray-700">
                      Mar 22, 2028
                    </p>
                  </li>
                </ul>
                <hr className="my-3 border-gray-200" />{" "}
                <div className="p-5 pt-0 ">
                  <div className="flex gap-2 mb-4">
                    <p className="text-sm font-medium text-gray-700">Orders</p>
                    <p className="text-sm font-normal text-gray-500">
                      15,299 of 25,500 orders used
                    </p>
                  </div>
                  <ProgressBar percentage="50" />
                </div>
              </div>
              <div className="m-2 ml-0">
                <h3 className="font-medium text-gray-800 mb-6">
                  Plan Benefits
                </h3>
                <ul>
                  <li className=" mb-2 flex items-center gap-2">
                    <IoMdCheckmark className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-500 ">
                      25,500 orders per month
                    </span>
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <IoMdCheckmark className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-500 ">
                      Unlimited integrations
                    </span>
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <IoMdCheckmark className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-500 ">
                      Exclusive AutoFile discount
                    </span>
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <IoMdCheckmark className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-500 ">
                      10 GB Storage
                    </span>
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <IoMdClose className="text-gray-500" />
                    <span className="line-through text-sm font-medium text-gray-500 ">
                      Custom Templates
                    </span>
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <IoMdClose className="text-gray-500" />
                    <span className="line-through text-sm font-medium text-gray-500 ">
                      Advanced Marketing tool
                    </span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="w-full text-sm border bg-white border-gray-300 rounded-lg p-1 text-gray-700">
                    Cancle <br /> Subscription
                  </button>
                  <button className="w-full text-sm text-white p-1 bg-blue-500 rounded-lg">
                    Upgrade to <br /> Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Billing Info */}
          <div className=" bg-white border  border-gray-300 rounded-2xl ml-7 ">
            <div className="p-5 font-medium text-lg text-gray-800   ">
              <p>Products Description</p>
            </div>
            <hr className="border-gray-300" />
            <div className="m-5 p-5 border border-gray-300 rounded-2xl">
              <ul>
                <li className="grid grid-cols-2 ">
                  <p className="text-sm font-normal text-gray-500">Name</p>
                  <p className="text-sm  font-medium text-gray-700">
                    Mushafrof Chowdhury
                  </p>
                </li>
                <hr className="my-3 border-gray-100" />
                <li className="grid grid-cols-2  ">
                  <p className="text-sm font-normal text-gray-500">Street</p>
                  <p className="text-sm  font-medium text-gray-700">
                    800 E Elcamino Real, suite #400
                  </p>
                </li>
                <hr className="my-3 border-gray-100" />
                <li className="grid grid-cols-2  ">
                  <p className="text-sm font-normal text-gray-500">
                    City/State
                  </p>
                  <p className="text-sm  font-medium text-gray-700">
                    Mountain View, CA, 94040
                  </p>
                </li>
                <hr className="my-3 border-gray-100" />
                <li className="grid grid-cols-2  ">
                  <p className="text-sm font-normal text-gray-500">Country</p>
                  <p className="text-sm  font-medium text-gray-700">
                    United States of America
                  </p>
                </li>
                <hr className="my-3 border-gray-100" />
                <li className="grid grid-cols-2  ">
                  <p className="text-sm font-normal text-gray-500">
                    Zip/Postal code
                  </p>
                  <p className="text-sm  font-medium text-gray-700">19029 </p>
                </li>
                <hr className="my-3 border-gray-100" />
                <li className="grid grid-cols-2  ">
                  <p className="text-sm font-normal text-gray-500">Town/City</p>
                  <p className="text-sm  font-medium text-gray-700">New York</p>
                </li>
                <hr className="my-3 border-gray-100" />
                <li className="grid grid-cols-2 ">
                  <p className="text-sm font-normal text-gray-500">
                    VAT Number
                  </p>
                  <p className="text-sm  font-medium text-gray-700">
                    DE4920348
                  </p>
                </li>
              </ul>
              <button className=" items-center flex justify-center gap-2 mt-5 rounded-lg border border-gray-300 w-full py-2">
                <MdEdit />
                Update Billing Address
              </button>
            </div>
          </div>
        </div>
        {/* Payment Methods */}
        <div className="mt-7 bg-white border border-gray-300 rounded-2xl">
          <div className="m-7 flex justify-between items-center">
            <p>Payment Methods</p>
            <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-10 rounded-lg">
              <FaPlus />
              Add New Card
            </button>
          </div>
          <hr className="border-gray-300" />
          <div className="p-7">3 card</div>
        </div>
        {/* Invoices */}
        <div className="mt-7 bg-white border border-gray-300 rounded-2xl p-7">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-gray-800 ">Invoices</p>
              <p className="text-sm text-gray-500 ">
                Access all your previous invoices.
              </p>
            </div>
            <button className="flex justify-center items-center border border-gray-300 py-2 px-10 rounded-lg">
              <HiOutlineDownload />
              <p>Download All</p>
            </button>
          </div>
          <hr className="border-gray-300 my-3" />
          <table id="default-table">
            <thead className="mt-0 ">
              <tr className="">
                {/* badha th ni style .css file ma chhe */}

                <th  >
                  <span class="flex items-center mr-5">Name</span>
                </th>
                <th>
                  <span className="flex items-center mr-5">Date</span>
                </th>
                <th>
                  <span class="flex items-center mr-5">Price</span>
                </th>
                <th>
                  <span class="flex items-center mr-5">Plan</span>
                </th>
                <th>
                  <span class="flex items-center mr-5">Status</span>
                </th>
                <th>
                  <span class="flex items-center mr-5">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {InvoiceData.map((item) => {
                const isInStock = item.status === "Paid";

                const textColor = isInStock ? "text-green-600" : "text-red-600";
                const bgColor = isInStock ? "bg-green-50" : "bg-red-50";

                return (
                  //   proListRow na badha td ma vertical-aligne:middle apyu chhe external file ma...
                  <tr className="text-gray-500 proListRow ">
                    <td>
                      <div className="flex items-center">
                        {/* <img className=" h-15 w-15" src={item.icon} alt="" /> */}
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                    </td>
                    <td className="text-gray-700 ">{item.date}</td>
                    <td className="text-gray-700 ">${item.price} </td>
                    <td className="text-gray-700 ">{item.plan}</td>
                    <td>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${textColor} ${bgColor}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="flex gap-2">
                      <button className="flex justify-center items-center border border-gray-300 p-2 rounded-lg">
                        <HiOutlineDownload />
                      </button>
                      <button className="flex justify-center items-center border border-gray-300 p-2 rounded-lg">
                        <FaEye />
                      </button>
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
