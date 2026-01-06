import Card from "./Card";
import { SlPeople } from "react-icons/sl";
import { PiCubeLight } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import MonthlySalesGraph from "./MonthlySalesGraph";
import EcommerceStatisticGraph from "./EcommerceStatisticGraph";
import { FaFilter } from "react-icons/fa";
import RecentOrder from "./RecentOrder";
import CustDemographic from "./CustDemographic";
import EcommerceMonthlySalesChart from "./EcommerceMonthlySalesChart";

function Ecommerce() {
  return (
    <div className="bg-[#F9FAFB] pb-10">
      <div className="lg:flex m-7 mt-0  ">
        <div className="mt-7">
          <div className="w-full justify-between pt-7 sm:pt-0  space-y-7 sm:space-y-0 gap-7 sm:flex sm:gap-6 ">
            <Card
              icon={<SlPeople />}
              title="Customers"
              number={3782}
              change={11.01}
              arrow="↑"
              color="green"
            />
            <Card
              icon={<PiCubeLight />}
              title="Orders"
              number={5359}
              change={9.05}
              arrow="↓"
              color="red"
            />
          </div>
          <div className=" p-5  mt-7 bg-white border border-[#E4E7EC] rounded-2xl">
            <div className="flex justify-between mb-4 ">
              <p>Monthly Sales</p>
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
            <MonthlySalesGraph />
          </div>
        </div>

        <div className="mt-7 ml-0 lg:ml-7  rounded-2xl border border-[#E4E7EC] bg-[#F2F4F7]">
          <div className="border-b border-white p-4 rounded-2xl bg-white">
            <div className=" flex justify-between">
              <p className="font-bold">Monthly Target</p>
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
            <p className="text-gray-500">Target you’ve set for each month</p>

            <EcommerceMonthlySalesChart />
            <p className="text-gray-500 m-5 text-center">
              You earn $3287 today, it's higher than last month. Keep up your
              good work!
            </p>
          </div>

          <div className="flex justify-between pt-4 px-6 align-center gap-4 ">
            <div>
              <p className="text-gray-500 ">Target</p>
              <p className="font-bold">
                $20K <span className="text-red-500">↓</span>
              </p>
            </div>

            <div>
              <p className="text-gray-500">Revenue</p>
              <p className="font-bold">
                $20K <span className="text-green-500">↑</span>
              </p>
            </div>

            <div>
              <p className="text-gray-500">Today</p>
              <p className="font-bold">
                $20K <span className="text-green-500">↑</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white m-7 border border-[#E4E7EC] rounded-2xl">
        <div className="flex  p-7 justify-between ">
          <div>
            <p className="font-bold">Statistics</p>
            <p className="text-gray-500 text-sm">
              Target you’ve set for each month
            </p>
          </div>
          <div className="gap-4 flex p-2 text-gray-500 bg-gray-200 rounded-2xl">
            <button>Monthly</button>
            <button>Quarterly</button>
            <button>Annually</button>
          </div>
        </div>

        <div>
          <EcommerceStatisticGraph />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row m-7 gap-5">
        <CustDemographic />

        <div className="bg-white mt-5 lg:mt-0  w-full border border-[#E4E7EC] rounded-2xl ">
          <div className="flex justify-between m-5">
            <p className="font-semibold text-gray-800 text-lg">Recent Orders</p>
            <div className="flex gap-2 items-center">
              <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md text-sm ">
                <FaFilter />
                <p>Filter</p>
              </button>
              <button className="border border-gray-200 px-4 py-2 rounded-md text-sm">
                See all
              </button>
            </div>
          </div>
          <div className="m-5 overflow-x-scroll ">
            <table className="ecomtable" >
              <thead className="text-sm border-t border-b p-10 border-gray-200">
                <tr className="items-start text-gray-500 text-sm">
                  <td>Products</td>
                  <td>Price</td>
                  <td>
                    <p className="px-5">Catagery</p>
                  </td>
                  <td>Status</td>
                </tr>
              </thead>
              {/* <hr className="border-gray-200" /> */}
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <RecentOrder
                    pphoto="product-01.webp"
                    name="MacBook Pro 13”"
                    count={2}
                    catagery="Laptop"
                    price={2399.0}
                    status="Delivered"
                  />
                </tr>
                <tr>
                  <RecentOrder
                    pphoto="product-02.webp"
                    name="Apple Watch Ultra"
                    count={1}
                    catagery="Watch"
                    price={879}
                    status="Pending"
                  />
                </tr>
                <tr>
                  <RecentOrder
                    pphoto="product-03.webp"
                    name="iPhone 15 Pro Max"
                    count={2}
                    catagery="SmartPhone"
                    price={1869.0}
                    status="Delivered"
                  />
                </tr>
                <tr>
                  <RecentOrder
                    pphoto="product-04.webp"
                    name="iPad Pro 3rd Gen"
                    count={2}
                    catagery="Electronics"
                    price={2399.0}
                    status="Canceled"
                  />
                </tr>
                <tr>
                  <RecentOrder
                    pphoto="product-05.webp"
                    name="AirPods Pro 2nd Gen"
                    count={1}
                    catagery="Laptop"
                    price={240}
                    status="Delivered"
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
