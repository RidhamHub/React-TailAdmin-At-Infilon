import EcommTitle from "./EcommTitle";
import { FiUpload } from "react-icons/fi";

export default function AddProduct() {
  return (
    <div className="bg-[#F9FAFB] pb-20">
      <EcommTitle title="Add Product" />
      <form className="mt-5" action="">
        {/* Box------1 */}
        <div className=" bg-white border  border-gray-300 rounded-2xl m-7 mt-0 ">
          <div className="p-5 font-medium text-lg text-gray-800   ">
            <p>Products Description</p>
          </div>
          <hr className="border-gray-300" />

          <div className="p-5 pb-0 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Product Name
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <input
                  className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent"
                  type="text"
                  placeholder="Enter product name"
                  aria-required="true"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Category
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <select
                  className="px-4 py-2 my-0.5 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent text-sm"
                  name=""
                  id=""
                >
                  <option value disabled selected className=" text-gray-700">
                    Select a Category
                  </option>
                  <option className="text-gray-700" value="Laptop">
                    Laptop
                  </option>
                  <option className="text-gray-700" value="Phone">
                    Phone
                  </option>
                  <option className="text-gray-700" value="Watch">
                    Watch
                  </option>
                  <option className="text-gray-700" value="Electronics">
                    Electronics
                  </option>
                  <option className="text-gray-700" value="Accessories">
                    Accessories
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-5 pb-0 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Brand
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <select
                  className="px-4 py-2 my-0.5 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent text-sm"
                  name=""
                  id=""
                >
                  <option value disabled selected className=" text-gray-700">
                    Select brand
                  </option>
                  <option className="text-gray-700" value="Apple">
                    Apple
                  </option>
                  <option className="text-gray-700" value="Samsung">
                    Samsung
                  </option>
                  <option className="text-gray-700" value="LG">
                    LG
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Color
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <select
                  className="px-4 py-2 my-0.5 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent text-sm"
                  name=""
                  id=""
                >
                  <option value disabled selected className=" text-gray-700">
                    Select color
                  </option>
                  <option className="text-gray-700" value="silver">
                    Silver
                  </option>
                  <option className="text-gray-700" value="black">
                    Black
                  </option>
                  <option className="text-gray-700" value="white">
                    White
                  </option>
                  <option className="text-gray-700" value="gray">
                    Gray
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-5 pb-0 grid grid-cols-3 gap-4 ">
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
                  placeholder="15"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Length(CM)
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <input
                  min="0"
                  className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent"
                  type="number"
                  placeholder="120"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Width(CM)
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <input
                  min="0"
                  className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent"
                  type="number"
                  placeholder="23"
                />
              </div>
            </div>
          </div>

          <div className="p-5">
            <label
              htmlFor="product-name"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
              <textarea
                className="resize-none px-4 py-2 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent"
                placeholder="Receipt Info (optional)"
                rows="6"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
        </div>
        {/* Box------2 */}
        <div className=" bg-white border  border-gray-300 rounded-2xl m-7 mt-0 ">
          <div className="p-5 font-medium text-lg text-gray-800   ">
            <p>Pricing & Availability</p>
          </div>
          <hr className="border-gray-300" />
          <div className="p-5 pb-0 grid grid-cols-3 gap-4 ">
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
                  placeholder="15"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Length(CM)
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <input
                  min="0"
                  className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent"
                  type="number"
                  placeholder="120"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Width(CM)
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <input
                  min="0"
                  className="px-4 py-2 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent"
                  type="number"
                  placeholder="23"
                />
              </div>
            </div>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Brand
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <select
                  className="px-4 py-2 my-0.5 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent text-sm"
                  name=""
                  id=""
                >
                  <option value disabled selected className=" text-gray-700">
                    Select brand
                  </option>
                  <option className="text-gray-700" value="Apple">
                    Apple
                  </option>
                  <option className="text-gray-700" value="Samsung">
                    Samsung
                  </option>
                  <option className="text-gray-700" value="LG">
                    LG
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-700"
              >
                Availability Status
              </label>

              <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
                <select
                  className="px-4 py-2 my-0.5 outline-none border-none w-full placeholder:text-gray-500 placeholder:text-sm text-gray-800 bg-transparent text-sm"
                  name=""
                  id=""
                >
                  <option value disabled selected className=" text-gray-700">
                    Select availability
                  </option>
                  <option className="text-gray-700" value="silver">
                    Silver
                  </option>
                  <option className="text-gray-700" value="black">
                    Black
                  </option>
                  <option className="text-gray-700" value="white">
                    White
                  </option>
                  <option className="text-gray-700" value="gray">
                    Gray
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Box------3*/}
        <div className=" bg-white border  border-gray-300 rounded-2xl m-7 mt-0 ">
          <div className="p-5 font-medium text-lg text-gray-800   ">
            <p>Products Images</p>
          </div>
          <hr className="border-gray-300" />

          <div className="p-5 ">
            <div className="focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 border border-gray-300 rounded-lg flex items-center transition-all bg-white overflow-hidden">
              <div className="flex flex-col items-center border w-full">
                <FiUpload className="border border-gray-300 rounded-full p-4 h-[10%] w-[10%]" />
                <p className="text-gray-500 tex-sm text-center">
                  <span className="text-gray-800 font-medium">
                    Click to upload
                  </span>{" "}
                  or drag and drop SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input className="hidden" type="file" />
            </div>
          </div>
        </div>

        {/* last 2 buttons */}
        <div className="flex justify-end gap-3 m-7 mt-0">
          <button className="border bg-white border-gray-300 rounded-lg py-3 px-5 text-gray-700">
            Draft
          </button>
          <button className="text-white p-3 bg-blue-500 rounded-lg">
            Publish Product
          </button>
        </div>
      </form>
    </div>
  );
}
