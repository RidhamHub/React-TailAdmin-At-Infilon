import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import owner from "./assets/owner.webp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import API_BASE_URL from "./config/api";

function Nav() {
  const navigate = useNavigate();

  const name = localStorage.getItem("fullName");
  const image = localStorage.getItem("profileImage");
  const imageUrl = image ? `${API_BASE_URL}${image}` : owner;
  // console.log(name, image);

  const handleDelete = async (e) => {
    try {
      await axios.post(
        `${API_BASE_URL}/auth/logout`,
        {},

        {
          withCredentials: true, // important if backend sets cookies
        },
      );
      localStorage.removeItem("fullName");
      localStorage.removeItem("profileImage");
      // localStorage.removeItem("role");
      navigate("/auth/login");
    } catch (e) {
      console.log("error in submiting logoutt form : ", e);
    }
  };

  return (
    <header className="sticky bg-white w-full top-0 z-10">
      <div>
        <div className="block xl:hidden ">
          <div className="flex justify-between">
            <button className="white-bg-btn p-0 m-5 toggle-btn">
              <RxHamburgerMenu />
            </button>
            <div className="logo">
              <img
                src="https://nextjs-demo.tailadmin.com/images/logo/logo.svg"
                alt=""
              />
            </div>
            <button>
              <img src="./src/assets/3dot.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="flex items-center justify-between px-6  border-b border-gray-200">
            <div className="left-nav">
              <button className="bg-white border border-gray-200 p-3 rounded-xl ">
                <RxHamburgerMenu />
              </button>
              <div className="m-4 border border-gray-200 px-2 rounded-xl flex justify-between items-center">
                <div className="flex justify-center items-center mr-20 py-0">
                  <CiSearch />
                  <input
                    className="border-none placeholder:text-gray-500 placeholder:text-sm"
                    type="text"
                    placeholder="search or type command...."
                  />
                </div>
                <button className=" border bg-gray-50  border-gray-200 text-gray-500 rounded-md p-1 py-0 flex gap-1 items-center">
                  <span> ⌘ </span>
                  <span> K </span>
                </button>
              </div>
            </div>

            {/* <Link to="/auth/signup">
              <button className="border p-1 rounded-xl bg-blue-200 text-sm border-gray-500">
                Signup
              </button>
            </Link> */}

            <button
              onClick={handleDelete}
              className="bg-blue-500 hover:bg-blue-700 text-white border rounded-lg px-3 py-1"
            >
              Logout
            </button>

            {/* <Link to="/auth/login">
              <button className="border p-1 rounded-xl bg-blue-200 text-sm border-gray-500">
                Login
              </button>
            </Link> */}

            <div className="right-nav flex gap-4 items-center">
              <div className="flex gap-2">
                <button>
                  <img
                    className="border border-gray-200 p-2 rounded-full"
                    src="./src/assets/moon.svg"
                    alt=""
                  />
                </button>

                <button>
                  <img
                    className="border border-gray-200 p-2 rounded-full"
                    src="./src/assets/notification.svg"
                    alt=""
                  />
                </button>
              </div>
              <div className="">
                <button className="flex gap-2 items-center  justify-center ">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={imageUrl}
                    alt=""
                  />
                  {/* <img src={owner } alt="" /> */}
                  <span> {name}</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
