import CardCrm from "./CardCrm";
import { BsThreeDotsVertical } from "react-icons/bs";
import SalesCataCrmGraph from "./SalesCataCrmGraph";
import RecentOrderCrmCard from "./RecentOrderCrmCard";

function Crm() {
  return (
    <div className="p-7 bg-gray-50 ">
      {/* first 3 card  */}
      <div className="flex gap-5 w-auto">
        <CardCrm
          price="$120,369"
          text="Active Deal"
          percent="+20"
          color="green"
        />
        <CardCrm
          price="$234,210"
          text="Revenue Total"
          percent="+9.0"
          color="green"
        />
        <CardCrm price="874" text="Closed Deals" percent="-4.5" color="red" />
      </div>

      <div className="flex gap-7 mt-7 ">
        {/* Sales Category  */}
        <div className="bg-white p-7 rounded-2xl">
          <div className="flex justify-between mb-4 ">
            <p className="font-semibold text-xl">Sales Catagory</p>
            <button>
              <BsThreeDotsVertical />
            </button>
          </div>
          <SalesCataCrmGraph />
        </div>
        {/* Upcoming Schedule */}
        <div className="bg-white p-7 rounded-2xl w-auto">
          <div className="flex justify-between mb-4 ">
            <p className="font-semibold text-xl">Upcoming Schedule</p>
            <button>
              <BsThreeDotsVertical />
            </button>
          </div>

          <div className="mt-7 flex flex-col gap-10">
            <div className="flex items-center gap-3 text-xs">
              <input
                className="border border-gray-300 rounded-sm"
                type="checkbox"
              />
              <div className="flex gap-5 justify-between">
                <div>
                  <p className="text-gray-500">Wed, 11 Jan</p>
                  <p className="text-gray-700 font-semibold">09:20 AM</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">
                    Business Analytics Press
                  </p>
                  <p className="text-gray-500">
                    Exploring the Future of Data-Driven +6 more
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <input
                className=" border border-gray-300 rounded-sm"
                type="checkbox"
              />
              <div className="flex gap-5 justify-between">
                <div>
                  <p className="text-gray-500">Wed, 11 Jan</p>
                  <p className="text-gray-700 font-semibold">09:20 AM</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">
                    Business Analytics Press
                  </p>
                  <p className="text-gray-500">
                    Exploring the Future of Data-Driven +6 more
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <input
                className=" border border-gray-300 rounded-sm"
                type="checkbox"
              />
              <div className="flex gap-5 justify-between">
                <div>
                  <p className="text-gray-500">Wed, 11 Jan</p>
                  <p className="text-gray-700 font-semibold">09:20 AM</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">
                    Business Analytics Press
                  </p>
                  <p className="text-gray-500">
                    Exploring the Future of Data-Driven +6 more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-7 py-7 border border-gray-300 rounded-2xl bg-white">
        <div className="px-7">
          <p className="font-bold">Recent Orders</p>
        </div>
        <table
          className="min-w-full   border-separate "
          style={{ borderSpacing: "0 12px" }}
        >
          <thead className="border-t text-gray-500 text-sm  border-gray-100 border-b bg-gray-50">
            <tr className="items-start text-sm">
              <td className="flex gap-3 p-4">
                <input className="border-gray-300 rounded-sm" type="checkbox" />
                <span>Deal Id</span>
              </td>
              <td>Customer</td>
              <td>Product/Service</td>
              <td>Cross Value</td>
              <td>Close Date</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody className=" text-xs">
            <tr>
              <RecentOrderCrmCard
                id="DE124321"
                shortname="JD"
                name="John Doe"
                mail="johndoe@gmail.com"
                product="Software License"
                dealvalue="18,50.34"
                crossdate="2024-06-15"
                status="Complete"
              />
            </tr>
            <tr>
              <RecentOrderCrmCard
                id="DE124322"
                shortname="JS"
                name="Jane Smith"
                mail="janesmith@gmail.com"
                product="Cloud Hosting"
                dealvalue="12,99.00"
                crossdate="2024-06-18"
                status="Pending"
              />
            </tr>
            <tr>
              <RecentOrderCrmCard
                id="DE124323"
                shortname="MB"
                name="Michael Brown"
                mail="michaelbrown@gmail.com"
                product="Web Domain"
                dealvalue="9,50.00"
                crossdate="2024-06-20"
                status="Cancle"
              />
            </tr>
            <tr>
              <RecentOrderCrmCard
                id="DE124324"
                shortname="AJ"
                name="Alice Johnson"
                mail="alicejohnson@gmail.com"
                product="SSL Certificate"
                dealvalue="2,30.45"
                crossdate="2024-06-25"
                status="Pending"
              />
            </tr>

            <tr>
              <RecentOrderCrmCard
                id="DE124325"
                shortname="RL"
                name="Robert Lee"
                mail="robertlee@gmail.com"
                product="Premium Support"
                dealvalue="15,20.00"
                crossdate="2024-06-30"
                status="Complete"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crm;
