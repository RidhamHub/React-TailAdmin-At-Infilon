import { CiSearch } from "react-icons/ci";

function AiAssRightBox() {
  return (
    <>
      <div className="p-5 w-70 ">
        <button className="bg-blue-500 w-full text-white border rounded-lg py-2">
          + New Chat
        </button>
        <div className="border-gray-300 rounded-lg text-sm border my-5 px-2 flex items-center">
          <CiSearch />
          <input
            className="placeholder:text-gray-200 border-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="overflow-y-auto h-65 ">
          <div>
            <p className="text-xs text-gray-400 mb-3 pl-3 ">TODAY</p>
            <ul>
              <li className="text-xs hover:bg-gray-50 rounded-full px-3 py-1.5">
                Write a follow-up mail email t...
              </li>
              <li className="text-xs hover:bg-gray-50 rounded-full px-3 py-1.5">
                Generate responsive logi...
              </li>
              <li className="text-xs hover:bg-gray-50 rounded-full px-3 py-1.5">
                Create a warning state...
              </li>
              <li className="text-xs hover:bg-gray-50 rounded-full px-3 py-1.5">
                Suggest color palette for ...
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-gray-400 mt-5 mb-3 pl-3 ">YESTERDAY</p>
            <ul>
              <li className="text-xs hover:bg-gray-50 rounded-full px-3 py-1.5">
                Write a follow-up mail email t...
              </li>
              <li className="text-xs hover:bg-gray-50 rounded-full px-3 py-1.5">
                Create a warning state...
              </li>
              <li className="text-xs hover:bg-gray-50 rounded-full px-3 py-1.5">
                Add Password visibality to...
              </li>
              <li className="text-xs hover:bg-gray-50 rounded-full px-3 py-1.5">
                Write validation logic for...
              </li>
              <li className="text-xs hover:bg-gray-50 rounded-full px-3 py-1.5">
                Fix mobile responsiveness...
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiAssRightBox;
