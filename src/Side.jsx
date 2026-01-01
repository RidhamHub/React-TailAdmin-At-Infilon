import { Link } from "react-router";

function Side() {
  return (
    <div className="hidden md:block">
      <div className="logo">
        <img
          src="https://nextjs-demo.tailadmin.com/images/logo/logo.svg"
          alt=""
        />
      </div>
      <div className="main-sider ">
        <p className="menu-tag">MENU</p>
        <div className="text-sm text-gray-700 max-w-md mx-auto">
          {/* <!-- Item 1: Account Settings --> */}
          <details className="group rounded-lg bg-white overflow-hidden" open>
            <summary className=" m-2 p-2 rounded-2xl flex  justify-around items-center font-medium cursor-pointer list-none  hover:bg-gray-50 transition-colors">
              <div className="flex gap-2 mr-20 w-30">
                <img src="src/assets/dashboard.svg" alt="" />
                <span>Dashboard</span>
              </div>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="ml-10 slideDivP  text-gray-700">
              <p>
                <Link to="/ecommerce">Ecommerce</Link>
              </p>
              <p>
                <Link to="/analytics">Analytics</Link>
              </p>
              <p>
                <Link to="/marketing">Marketing</Link>
              </p>
              <p>
                <Link to="/crm">CRM</Link>
              </p>
              <p>
                <Link to="/stocks">Stocks</Link>
              </p>
              <p>
                <Link to="/">SaaS</Link>
              </p>
              <p>
                <Link to="/">Logistics</Link>
              </p>
            </div>
          </details>

          {/* <!-- Item 2: Notification Preferences --> */}
          <details className="group  rounded-lg bg-white overflow-hidden">
            <summary className=" m-2 p-2 rounded-2xl flex  justify-around items-center font-medium cursor-pointer list-none  hover:bg-gray-50 transition-colors">
              <div className="flex gap-2 mr-20 w-30">
                <img src="src/assets/aiassistant.svg" alt="" />
                <span>Ai Assistant</span>
              </div>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="ml-10 slideDivP  text-gray-700">
              <p>
                <Link to="/text-generator">Text Generator</Link>
              </p>
              <p>
                <Link to="/image-generator">Image Generator</Link>
              </p>
              <p>
                <Link to="/code-generator">Code Generator</Link>
              </p>
              <p>
                <Link to="/video-generator">Video Generator</Link>
              </p>
            </div>
          </details>

          {/* <!-- Item 3: Security & Privacy --> */}
          <details className="group  rounded-lg bg-white overflow-hidden">
            <summary className=" m-2 p-2 rounded-2xl flex  justify-around items-center font-medium cursor-pointer list-none  hover:bg-gray-50 transition-colors">
              <div className="flex gap-2 mr-20 w-30">
                <img src="src/assets/ecommerce.svg" alt="" />
                <span>E-commerce</span>
              </div>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="ml-10 slideDivP  text-gray-700">
              <p>
                <Link to="/products">Products</Link>
              </p>
              <p>
                <Link to="/">Add Products</Link>
              </p>
              <p>
                <Link to="/">Billing</Link>
              </p>
              <p>
                <Link to="/">invoices</Link>
              </p>
              <p>
                <Link to="/">single invoice</Link>
              </p>
              <p>
                <Link to="/">Create invoices</Link>
              </p>
              <p>
                <Link to="/">Transactions</Link>
              </p>
              <p>
                <Link to="/">Single Transactions</Link>
              </p>
            </div>
          </details>
        </div>

        <p>SUPPORT</p>

        <ul>
          <li>Chat</li>
          <li>Support</li>
          <li>Email</li>
        </ul>

        <p>OTHERS</p>

        <ul>
          <li>Charts</li>
          <li>Ui Elemets</li>
          <li>Authentication</li>
        </ul>
      </div>
    </div>
  );
}

export default Side;
