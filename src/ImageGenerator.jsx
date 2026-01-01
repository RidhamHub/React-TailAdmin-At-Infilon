import AiAssTitle from "./AiAssTitle";
import AiAssRightBox from "./AiAssRightBox";
import AiAssPromptBox from "./AiAssPromptBox";
import { MdOutlineFileDownload } from "react-icons/md";

export default function ImageGenerator() {
  return (
    <div>
      <AiAssTitle title="Image Generator" />

      <div className="flex ">
        {/* left chat Box */}
        <div className="w-[80%]  p-10  text-xs bg-[#F9FAFB]   ">
          <div className=" flex-1 h-40  overflow-y-auto  ">
            <div className="flex justify-end pb-10">
              <p className=" rounded-xl rounded-tr-xs max-w-120  px-4 py-3 bg-blue-100">
                Generate 2 abstract image with purple and pink color
              </p>
            </div>
            <div className="flex  justify-start pb-2">
              <img
                src="https://react-demo.tailadmin.com/images/ai/img-lg.png"
                alt=""
              />
            </div>
            <button className="hover:text-gray-700 flex gap-2 items-center bg-white mb-5 p-2 rounded-2xl text-gray-500">
              <MdOutlineFileDownload />
              Download
            </button>
            <p className="pb-10 text-gray-500">
              Here is the tall building with a sleek glass facade, as described.
              The structure features modern elements with reflective glass
              panels that shimmer beautifully under the sunlight.
            </p>
            <div className="flex justify-end pb-10">
              <p className=" rounded-xl rounded-tr-xs max-w-120  px-4 py-3 bg-blue-100">
                Generate a tall building image with glass
              </p>
            </div>
            <div className="flex justify-start pb-10">
              <div className="flex gap-2">
                <div>
                  <img
                    src="https://react-demo.tailadmin.com/images/ai/img-md-1.png"
                    alt=""
                  />
                  <button className="hover:text-gray-700 flex gap-2 mt-2 items-center bg-white p-2 rounded-2xl text-gray-500">
                    <MdOutlineFileDownload />
                    Download
                  </button>
                </div>
                <div>
                  <img
                    src="https://react-demo.tailadmin.com/images/ai/img-md-2.png"
                    alt=""
                  />
                  <button className="hover:text-gray-700 flex mt-2 gap-2 items-center bg-white p-2 rounded-2xl text-gray-500">
                    <MdOutlineFileDownload />
                    Download
                  </button>
                </div>
              </div>
            </div>
            <p className="text-gray-500">
              Here are two tall buildings with sleek glass facades, just as
              described. Both structures showcase modern design elements, glass
              panels that shimmer beautifully in the sunlight.
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
