import EcommTitle from "./EcommTitle";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function CreateInvoice() {
  return (
    <div className="bg-[#F9FAFB] pb-20 ">
      <EcommTitle title="Create Invoice" />

      <div className="m-7 border border-gray-300 rounded-2xl bg-white">
        <p className="text-xl font-medium text-gray-800 p-7">Create Invoice</p>
        <hr className="border-gray-300" />

        {/* input feild */}
        <div className="m-7">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Invoice Number
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <input
                  className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-400 placeholder:text-sm text-gray-800 bg-transparent"
                  type="text"
                  placeholder="WP-3434434"
                  aria-required="true"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Customer Name
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <input
                  className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-400 placeholder:text-sm text-gray-800 bg-transparent"
                  type="text"
                  placeholder="John Deniyal"
                  aria-required="true"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="product-name"
              className="text-sm font-medium text-gray-700"
            >
              Customer Address
            </label>

            <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
              <input
                className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-400 placeholder:text-sm text-gray-800 bg-transparent"
                type="text"
                placeholder="Enter Customer Address"
                aria-required="true"
              />
            </div>
          </div>
        </div>
        <hr className="border-gray-300" />

        {/* table */}
        <div className="overflow-x-auto m-7  border border-gray-200 rounded-2xl">
          <table class="  w-full text-center text-sm text-gray-700 bg-white">
            <thead class="text-xs     bg-gray-50 text-gray-600">
              <tr>
                <th class="px-6 py-4">S.No.#</th>
                <th class="px-6 py-4">Products</th>
                <th class="px-6 py-4 ">Quantity</th>
                <th class="px-6 py-4 ">Unit Cost</th>
                <th class="px-6 py-4 ">Discount</th>
                <th class="px-6 py-4 ">Total</th>
              </tr>
            </thead>
            <tbody class="">
              <tr class=" text-center text-sm text-gray-500">
                <td class="px-6 py-4">1</td>
                <td class="px-6 py-4 font-medium text-gray-900">
                  Macbook pro 13”
                </td>
                <td class="px-6 py-4 ">1</td>
                <td class="px-6 py-4 ">$48</td>
                <td class="px-6 py-4 ">0%</td>
                <td class="px-6 py-4">$1,200</td>
              </tr>
              <tr class=" text-center text-sm text-gray-500">
                <td class="px-6 py-4">2</td>
                <td class="px-6 py-4 font-medium text-gray-900">
                  Apple Watch Ultra
                </td>
                <td class="px-6 py-4 ">1</td>
                <td class="px-6 py-4 ">$300</td>
                <td class="px-6 py-4 ">50%</td>
                <td class="px-6 py-4">$150</td>
              </tr>
              <tr class=" text-center text-sm text-gray-500">
                <td class="px-6 py-4">3</td>
                <td class="px-6 py-4 font-medium text-gray-900">
                  iPhone 15 Pro Max
                </td>
                <td class="px-6 py-4 ">3</td>
                <td class="px-6 py-4 ">$800</td>
                <td class="px-6 py-4 ">0%</td>
                <td class="px-6 py-4">$1,600</td>
              </tr>
              <tr class=" text-center text-sm text-gray-500">
                <td class="px-6 py-4">4</td>
                <td class="px-6 py-4 font-medium text-gray-900">
                  iPad Pro 3rd Gen
                </td>
                <td class="px-6 py-4 ">1</td>
                <td class="px-6 py-4 ">$900</td>
                <td class="px-6 py-4 ">0%</td>
                <td class="px-6 py-4">$900</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5 buttons */}
        <div className="m-7 rounded-2xl p-5 bg-gray-50 border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 items-center gap-2">
            {/* 1 */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Product Name
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <input
                  className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-400 placeholder:text-sm text-gray-800 bg-transparent"
                  type="text"
                  placeholder="Enter Product Name"
                  aria-required="true"
                />
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Weight(KG)
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <input
                  min="0"
                  className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent"
                  type="number"
                  placeholder="Enter Product Price"
                />
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Quantity
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <input
                  min="0"
                  className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent"
                  type="number"
                  placeholder="1"
                />
              </div>
            </div>
            {/* 4 */}
            <div className="flex flex-col  gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Discount
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <select
                  className="px-4 py-2 my-0.5 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent text-sm"
                  name=""
                  id=""
                >
                  <option value selected className=" text-gray-700">
                    0%
                  </option>
                  <option className="text-gray-700" value="Apple">
                    25%
                  </option>
                  <option className="text-gray-700" value="Samsung">
                    50%
                  </option>
                  <option className="text-gray-700" value="LG">
                    100%
                  </option>
                </select>
              </div>
            </div>
            {/* 5 */}
            <div >
              <button className="bg-blue-500 px-6 py-3 text-white rounded-lg">
                Save Product
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center text-gray-500 text-sm mt-5">
            <MdOutlineNotificationImportant />
            <p>
              After filling in the product details, press Enter/Return or click
              'Save Product' to add it to the list.
            </p>
          </div>
        </div>

        <div className="flex justify-end flex-wrap ">
          <div className="m-7 mt-0 space-y-1  text-right ">
            <p className="mb-4 text-left text-sm font-medium text-gray-800 ">
              Order summary
            </p>
            <ul className="space-y-2">
              <li className="flex items-center justify-between gap-19">
                <span className="text-sm text-gray-500">Sub Total</span>
                <span className="text-sm text-gray-700 font-medium">
                  $3850.00
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Vat (10%):</span>
                <span className="text-sm text-gray-700 font-medium">
                  $385.00
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm text-gray-700 font-medium">Total</span>
                <span className=" text-gray-700 font-semibold text-lg">
                  $4235.00
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-300" />

        <div className="text-sm m-7 flex flex-wrap gap-3 justify-end">
          <button className="flex gap-2 items-center bg-white rounded-lg px-6 py-3 border border-gray-300">
            <FaEye />
            Preview Invoice
          </button>
          <button className="flex gap-2 items-center text-white bg-blue-600 px-6 py-3  rounded-md">
            <FaRegSave />
            Save Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
