import { Link, NavLink } from "react-router";

function Check() {
  return (
    <div>
      <div class="max-w-md mx-auto mt-10 space-y-2">
        {/* <!-- Item 1: Account Settings --> */}
        <details class="group rounded-lg bg-white overflow-hidden" open>
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 hover:bg-gray-50 transition-colors">
            <img src="src/assets/dashboard.svg" alt="" />

            <span>Dashboard</span>
            <span class="transition group-open:rotate-180">
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
          <div class="p-4  text-gray-600">
            <p>
              <Link to="/">Ecommerce</Link>
            </p>
            <p>
              <Link to="/analytics">Analytics</Link>
            </p>
            <p>
              <Link to="/">Marketing</Link>
            </p>
            <p>
              <Link to="/">CRM</Link>
            </p>
            <p>
              <Link to="/">Stocks</Link>
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
        <details class="group  rounded-lg bg-white overflow-hidden">
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 hover:bg-gray-50 transition-colors">
            <img src="src/assets/form.svg" alt="" />
            <span>Ai Assistant</span>
            <span class="transition group-open:rotate-180">
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
          <div class="p-4  text-gray-600">
            <p>
              <Link to="/">Text Generator</Link>
            </p>
            <p>
              <Link to="/">Image Generator</Link>
            </p>
          </div>
        </details>

        {/* <!-- Item 3: Security & Privacy --> */}
        <details class="group  rounded-lg bg-white overflow-hidden">
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 hover:bg-gray-50 transition-colors">
            <img src="src/assets/form.svg" alt="" />
            <span>E-commerce</span>
            <span class="transition group-open:rotate-180">
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
          <div class="p-4  text-gray-600">
            <p>
              <Link to="/">Text Generator</Link>
            </p>
            <p>
              <Link to="/">Image Generator</Link>
            </p>
          </div>
        </details>

        {/* <!-- Item 4: Security & Privacy --> */}
        <details class="group  rounded-lg bg-white overflow-hidden">
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 hover:bg-gray-50 transition-colors">
            <img src="src/assets/form.svg" alt="" />
            <span>Calander</span>
            <span class="transition group-open:rotate-180">
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
          <div class="p-4  text-gray-600">
            <p>
              <Link to="/">Text Generator</Link>
            </p>
            <p>
              <Link to="/">Image Generator</Link>
            </p>
          </div>
        </details>

        {/* <!-- Item 5: Security & Privacy --> */}
        <details class="group  rounded-lg bg-white overflow-hidden">
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 hover:bg-gray-50 transition-colors">
            <img src="src/assets/form.svg" alt="" />
            <span>User Profile</span>
            <span class="transition group-open:rotate-180">
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
          <div class="p-4  text-gray-600">
            <p>
              <Link to="/">Text Generator</Link>
            </p>
            <p>
              <Link to="/">Image Generator</Link>
            </p>
          </div>
        </details>
        {/* <!-- Item 6: Security & Privacy --> */}
        <details class="group  rounded-lg bg-white overflow-hidden">
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 hover:bg-gray-50 transition-colors">
            <img src="src/assets/form.svg" alt="" />
            <span>Task</span>
            <span class="transition group-open:rotate-180">
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
          <div class="p-4  text-gray-600">
            <p>
              <Link to="/">Text Generator</Link>
            </p>
            <p>
              <Link to="/">Image Generator</Link>
            </p>
          </div>
        </details>
        {/* <!-- Item 7: Security & Privacy --> */}
        <details class="group  rounded-lg bg-white overflow-hidden">
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 hover:bg-gray-50 transition-colors">
            <img src="src/assets/form.svg" alt="" />
            <span>Forms</span>
            <span class="transition group-open:rotate-180">
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
          <div class="p-4  text-gray-600">
            <p>
              <Link to="/">Text Generator</Link>
            </p>
            <p>
              <Link to="/">Image Generator</Link>
            </p>
          </div>
        </details>
        {/* <!-- Item 8: Security & Privacy --> */}
        <details class="group  rounded-lg bg-white overflow-hidden">
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 hover:bg-gray-50 transition-colors">
            <img src="src/assets/form.svg" alt="" />
            <span>Tables</span>
            <span class="transition group-open:rotate-180">
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
          <div class="p-4  text-gray-600">
            <p>
              <Link to="/">Text Generator</Link>
            </p>
            <p>
              <Link to="/">Image Generator</Link>
            </p>
          </div>
        </details>

        {/* <!-- Item 9: Security & Privacy --> */}
        <details class="group  rounded-lg bg-white overflow-hidden">
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 hover:bg-gray-50 transition-colors">
            <img src="src/assets/form.svg" alt="" />
            <span>Pages</span>
            <span class="transition group-open:rotate-180">
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
          <div class="p-4  text-gray-600">
            <p>
              <Link to="/">Text Generator</Link>
            </p>
            <p>
              <Link to="/">Image Generator</Link>
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}

export default Check;
