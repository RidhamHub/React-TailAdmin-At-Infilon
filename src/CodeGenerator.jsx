import AiAssTitle from "./AiAssTitle";
import AiAssRightBox from "./AiAssRightBox";
import AiAssPromptBox from "./AiAssPromptBox";
import { FaCode } from "react-icons/fa";
import { GoCopy } from "react-icons/go";

export default function CodeGenerator() {
  return (
    <div>
      <AiAssTitle title="Text Generator" />

      <div className="flex ">
        {/* left chat Box */}
        <div className="w-[80%]  p-10  text-xs bg-[#F9FAFB]   ">
          <div className=" flex-1 h-40  overflow-y-auto  ">
            <div className="flex justify-end pb-10">
              <p className=" rounded-xl rounded-tr-xs max-w-120  px-4 py-3 bg-blue-100">
                Give me a React login form component with Google & GitHub
                authentication
              </p>
            </div>
            <div className=" justify-start pb-10 bg-white border border-gray-300 rounded-2xl ">
              <div className="p-4 pb-1 text-sm text-gray-500 flex justify-between w-full">
                <div className="flex gap-2 items-center">
                  <FaCode />
                  <p>HTML</p>
                </div>
                <button className="border border-gray-100  p-2 rounded-full flex gap-2 items-center">
                  <GoCopy />
                  <span className="text-xs text-black ">Copy</span>
                </button>
              </div>
                          <hr className="text-gray-300" />
                          <div className="p-4 ">
                              hello code is here 
                          </div>
            </div>
            <p className="text-gray-500">
              Here is the code for login form with google and github
              authentication as described.
            </p>
          </div>
          {/* prompt box */}
          <AiAssPromptBox />
        </div>
        {/* right box */}
        <AiAssRightBox />
      </div>
    </div>
  );
}
