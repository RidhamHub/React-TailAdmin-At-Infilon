import AnalyticsGraph from "./AnalyticsGraph";
import AnaCard from "./AnaCard";
import { BsThreeDotsVertical } from "react-icons/bs";
import CustDemographic from "./CustDemographic";
import { FaFilter } from "react-icons/fa";
import LiveVisitorsgaph from "./LiveVisitorsgaph";

function Analytics() {
  return (
    <div className="bg-gray-50  p-7 container">
      {/* first 4 boxes */}
      <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-2">
        <AnaCard
          title="Unique Visitors"
          number="24.7K"
          change="+20"
          color="green"
          text="Vs last month"
          className="w-20"
        />
        <AnaCard
          title="Total Pageviews"
          number="55.9K"
          change="+4"
          color="green"
          text="Vs last month"
        />
        <AnaCard
          title="Bounce Rate"
          number="54%"
          change="-1.59"
          color="red"
          text="Vs last month"
        />

        <AnaCard
          title="Visit Duration"
          number="2m 56s"
          change="+7"
          color="green"
          text="Vs last month"
        />
      </div>

      {/* Analytics graph */}
      <div className="bg-white mt-7  border border-[#E4E7EC] rounded-2xl">
        <div className="flex  p-7 justify-between ">
          <div>
            <p className="font-bold">Analytics</p>
            <p className="text-gray-500">Visitor analytics of last 30 days </p>
          </div>
          <div className="gap-4 flex border border-gray-200 rounded-2xl">
            <button>Monthly</button>
            <button>Quarterly</button>
            <button>Annually</button>
          </div>
        </div>

        <div>
          <AnalyticsGraph />
        </div>
      </div>

      {/* top chanels and top pages */}
      <div className="mt-7  lg:flex  ">
        <div className="mb-0  flex flex-col sm:flex-row items-center sm:items-start ">
          <div className="bg-white  rounded-2xl p-7  ">
            <div className="flex justify-between ">
              <p className="font-bold">Top Channels</p>
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
            <div className=" text-gray-500">
              <div className="flex text-sm mt-5 justify-between">
                <p>Source</p>
                <p>Visitors</p>
              </div>
              <hr className="border-gray-200 mt-3" />
              <div className="flex justify-between">
                <p>Google</p>
                <p>4.7k</p>
              </div>
              <hr className="border-gray-200 mt-3" />
              <div className="flex  justify-between">
                <p>Facebook</p>
                <p>3.4k</p>
              </div>
              <hr className="border-gray-200 mt-3" />
              <div className="flex  justify-between">
                <p>Threads</p>
                <p>2.9k</p>
              </div>
              <hr className="border-gray-200 mt-3" />
              <div className="flex justify-between">
                <p>Google</p>
                <p>1.5k</p>
              </div>
              <hr className="border-gray-200 mt-3" />
            </div>
            <button className="border-2 ml-7 rounded-2xl mt-3 border-gray-500 p-2 ">
              Channels Report
            </button>
          </div>

          <div className="bg-white  rounded-2xl mt-7 sm:mt-0 sm:ml-7 p-7">
            <div className="flex justify-between w-60">
              <p className="font-bold">Top Pages</p>
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
            <div className="w-57 text-gray-500">
              <div className="flex text-sm mt-5 justify-between">
                <p>tailadmin.com</p>
                <p>4.7k</p>
              </div>
              <hr className="border-gray-200 mt-3" />
              <div className="flex justify-between">
                <p>preview.tailadmin.com</p>
                <p>3.4k</p>
              </div>
              <hr className="border-gray-200 mt-3" />
              <div className="flex  justify-between">
                <p>docs.tailadmin.com</p>
                <p>2.9k</p>
              </div>
              <hr className="border-gray-200 mt-3" />
              <div className="flex  justify-between">
                <p>tailadmin.com/componetns</p>
                <p>1.5k</p>
              </div>
              <hr className="border-gray-200 mt-3" />
              <div className="flex justify-between">
                <p>Google</p>
                <p>1.5k</p>
              </div>
              <hr className="border-gray-200 mt-3" />
            </div>
            <button className="border-2 ml-7 rounded-2xl mt-3 border-gray-500 p-2 ">
              Channels Report
            </button>
          </div>
        </div>
        {/* active user card */}
        <div className="mt-7 lg:mt-0 lg:ml-7 bg-white p-7 rounded-2xl">
          <div className="flex justify-between  ">
            <p className="font-bold">Active Users</p>
            <button>
              <BsThreeDotsVertical />
            </button>
          </div>
          <div className="flex">
            <div className="flex">
              <p>.</p>
              <span className="font-bold text-2xl">364</span>
            </div>
            <span className="text-gray-500 text-sm ">Live visitors</span>
          </div>
          <LiveVisitorsgaph width={500} />
        </div>
      </div>

      {/* customer Demographic and recent order */}
      <div className="lg:flex mt-7 gap-5">
        <CustDemographic />
        <div className="mt-7 lg:mt-0 bg-white w-full   p-7 pb-0 border border-[#E4E7EC] rounded-2xl ">
          <div className="flex justify-between items-center">
            <p className="font-bold">Recent Orders</p>
            <div className="flex ">
              <button className="flex border m-2 border-gray-300 p-2 rounded-sm">
                <FaFilter />
                <p>Filter</p>
              </button>
              <button className=" border m-2 border-gray-300 p-2 rounded-sm">
                See all
              </button>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="text-gray-500 text-sm">
            <div className="grid grid-cols-5 gap-8 m-3 ml-0">
              <p>Products</p>
              <p>Category</p>
              <p>Country</p>
              <p>CR</p>
              <p>Value</p>
            </div>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-5 m-3 ml-0 gap-8">
              <p className="text-black font-bold">TailGrids</p>
              <p>UI Kits</p>
              <img
                src="https://nextjs-demo.tailadmin.com/images/country/country-01.svg"
                alt=""
                className="h-5 w-5"
              />
              <p>Dashboard</p>
              <p className="text-green-600 font-semibold">$12,499</p>
            </div>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-5 m-3 ml-0 gap-8">
              <p className="text-black font-bold">GrayGrids</p>
              <p>GrayGrids</p>
              <img
                src="https://nextjs-demo.tailadmin.com/images/country/country-02.svg"
                alt=""
                className="h-5 w-5"
              />
              <p>Dashboard</p>
              <p className="text-green-600 font-semibold">$5498</p>
            </div>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-5 m-3 ml-0 gap-8">
              <p className="text-black font-bold">Uideck</p>
              <p>Templates</p>
              <img
                src="https://nextjs-demo.tailadmin.com/images/country/country-03.svg"
                alt=""
                className="h-5 w-5"
              />
              <p>Dashboard</p>
              <p className="text-green-600 font-semibold">$4621</p>
            </div>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-5 m-3 ml-0 gap-8">
              <p className="text-black font-bold">FormBold</p>
              <p>SaaS</p>
              <img
                src="https://nextjs-demo.tailadmin.com/images/country/country-04.svg"
                alt=""
                className="h-5 w-5"
              />
              <p>Dashboard</p>
              <p className="text-green-600 font-semibold">$13,843</p>
            </div>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-5 m-3 ml-0 gap-8">
              <p className="text-black font-bold">NextAdmin</p>
              <p>Templates</p>
              <img
                src="https://nextjs-demo.tailadmin.com/images/country/country-05.svg"
                alt=""
                className="h-5 w-5"
              />
              <p>Dashboard</p>
              <p className="text-green-600 font-semibold">$7,523</p>
            </div>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-5 m-3 ml-0 gap-8">
              <p className="text-black font-bold">Form Builder</p>
              <p>Templates</p>
              <img
                src="https://nextjs-demo.tailadmin.com/images/country/country-06.svg"
                alt=""
                className="h-5 w-5"
              />
              <p>Dashboard</p>
              <p className="text-green-600 font-semibold">$1,373</p>
            </div>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-5 m-3 ml-0 gap-8">
              <p className="text-black font-bold">AyroUI</p>
              <p>Templates</p>
              <img
                src="https://react-demo.tailadmin.com/images/country/country-07.svg"
                alt=""
                className="h-5 w-5"
              />
              <p>Dashboard</p>
              <p className="text-green-600 font-semibold">$500,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
