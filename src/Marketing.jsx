import AnaCard from "./AnaCard";
import { PiShootingStarLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import ImpressionDataTrafficChart from "./ImpressionDataTrafficChart";
import { BsThreeDotsVertical } from "react-icons/bs";
import FeaturedCampaignsCard from "./FeaturedCampaignsCard";
import ProgressBar from "./ProgressBar";
import { TraficSource } from "./Data";

function Marketing() {
  return (
    <div className="bg-gray-50 p-7">
      {/* first 3box  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        <AnaCard
          icon={<PiShootingStarLight />}
          title="Avg. Client Rating"
          number="7.8/10"
          change="+20"
          color="green"
        />

        <AnaCard
          icon={<GoPeople />}
          title="Instagram Followers"
          number="5,934"
          change="-3.59"
          color="red"
        />

        <AnaCard
          icon="💲"
          title="Total Revenue"
          number="$9,758"
          change="+15"
          color="green"
        />
      </div>

      <div className="lg:flex  mt-7">
        {/* left box */}
        <div className="w-full lg:w-[65%] ">
          {/* Impression & Data Traffic */}
          <div className="bg-white p-7 rounded-2xl">
            <div className="flex justify-between">
              <div>
                <span className="font-bold">Impression & Data Traffic</span>
                <p className="text-gray-500 text-sm">
                  Jun 1, 2024 - Dec 1, 2025
                </p>
              </div>
              <div>
                <span className="text-2xl font-bold">$9,758.00</span>
                <span className="px-1 ml-1 py-0.5 rounded-full text-xs font-semibold text-green-500 bg-green-100">
                  +7.96%
                </span>
                <p className="text-gray-500 text-sm">Total Revenue</p>
              </div>
            </div>
            <ImpressionDataTrafficChart />
          </div>

          {/* Featured Campaigns */}
          <div className="bg-white mt-7 p-7 rounded-2xl">
            <div className="flex justify-between mb-4 ">
              <p className="font-bold text-xl">Featured Campaigns</p>
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
            <hr className="border-gray-200" />

            <div className="flex justify-between text-gray-500 text-sm">
              <p>Products</p>
              <p>Campaign</p>
              <p>Status</p>
            </div>
            <hr className="border-gray-200" />

            <FeaturedCampaignsCard
              profile="https://react-demo.tailadmin.com/images/user/user-01.jpg"
              name="Wilson Gouse"
              compney="https://react-demo.tailadmin.com/images/brand/brand-01.svg"
              str="Grow your brand by..."
              campaign="Ads campaign"
              status="Success"
            />
            <hr className="border-gray-200" />
            <FeaturedCampaignsCard
              profile="https://react-demo.tailadmin.com/images/user/user-02.jpg"
              name="Wilson Gouse"
              compney="https://react-demo.tailadmin.com/images/brand/brand-02.svg"
              str="Grow your brand by..."
              campaign="Ads campaign"
              status="Pending"
            />
            <hr className="border-gray-200" />
            <FeaturedCampaignsCard
              profile="https://react-demo.tailadmin.com/images/user/user-03.jpg"
              name="Wilson Gouse"
              compney="https://react-demo.tailadmin.com/images/brand/brand-03.svg"
              str="Grow your brand by..."
              campaign="Ads campaign"
              status="Success"
            />
            <hr className="border-gray-200" />
            <FeaturedCampaignsCard
              profile="https://react-demo.tailadmin.com/images/user/user-04.jpg"
              name="Wilson Gouse"
              compney="https://react-demo.tailadmin.com/images/brand/brand-04.svg"
              str="Grow your brand by..."
              campaign="Ads campaign"
              status="Failed"
            />
            <hr className="border-gray-200" />
            <FeaturedCampaignsCard
              profile="https://react-demo.tailadmin.com/images/user/user-05.jpg"
              name="Wilson Gouse"
              compney="https://react-demo.tailadmin.com/images/brand/brand-05.svg"
              str="Grow your brand by..."
              campaign="Ads campaign"
              status="Success"
            />
            <hr className="border-gray-200" />
            <FeaturedCampaignsCard
              profile="https://react-demo.tailadmin.com/images/user/user-06.jpg"
              name="Wilson Gouse"
              compney="https://react-demo.tailadmin.com/images/brand/brand-06.svg"
              str="Grow your brand by..."
              campaign="Ads campaign"
              status="Success"
            />
          </div>
        </div>

        {/* right box */}
        <div className=" p-7 pr-0 w-full lg:w-[35%]">
          {/* Traffic Stats */}
          <div className="bg-white rounded-2xl p-7">
            <div className="flex justify-between mb-4 ">
              <p className="font-bold text-xl">Traffic Stats</p>
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
            <div className="bg-red-500 my-5">
              <button>Monthly</button>
              <button>Quartely</button>
              <button>Annually</button>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                New <br /> Subscribers
              </p>
              <p className="text-2xl font-bold">567K</p>
              <div className="flex items-center gap-1">
                <p className="text-green-500"> +3.85%</p>
                <p className="text-sm text-gray-500">then last Week</p>
                <img
                  src="./src/assets/image.png "
                  alt=""
                  className="h-[50%] w-[50%]"
                />
              </div>
            </div>
            <hr className="border-gray-200 m-4" />

            <div>
              <p className="text-sm text-gray-500">
                Conversion <br /> Rate
              </p>
              <p className="text-2xl font-bold">276K</p>
              <div className="flex items-center gap-1">
                <p className="text-red-500"> -5.39%</p>
                <p className="text-sm text-gray-500">then last Week</p>
                <img
                  src="./src/assets/image.png "
                  alt=""
                  className="h-[50%] w-[50%]"
                />
              </div>
            </div>
            <hr className="border-gray-200 m-4" />

            <div>
              <p className="text-sm text-gray-500">Page Bounce Rate</p>
              <p className="text-2xl font-bold">285k</p>
              <div className="flex items-center gap-1">
                <p className="text-green-500"> +12.74%</p>
                <p className="text-sm text-gray-500">then last Week</p>
                <img
                  src="./src/assets/image.png "
                  alt=""
                  className="h-[50%] w-[50%]"
                />
              </div>
            </div>
          </div>
          {/* Top Traffic Source */}
          <div className="bg-white rounded-2xl mt-7 p-7 ">
            <div className="flex justify-between mb-4 ">
              <p className="font-bold text-xl">Top Traffic Source</p>
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
            <div className="items-center">
              {TraficSource.map((item) => (
                <>
                  <div className="flex  items-center gap-2 ml-2">
                    <img src={item.link} alt="" />
                    <p className="text-xs">{item.com}</p>

                    <ProgressBar percentage={item.prog} />
                    <p>{item.prog}%</p>
                  </div>
                  <hr className="border-gray-200 my-2" />
                </>
              ))}
            </div> 

            <button className="border border-gray-200 w-full mt-4 p-2 rounded-xl">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
