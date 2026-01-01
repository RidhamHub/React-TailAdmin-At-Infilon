import AiAssTitle from "./AiAssTitle";
import AiAssRightBox from "./AiAssRightBox";
import AiAssPromptBox from "./AiAssPromptBox";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

export default function VideoGenerator() {
  return (
    <div>
      <AiAssTitle title="Text Generator" />

      <div className="flex ">
        {/* left chat Box */}
        <div className="w-[80%]  p-10  text-xs bg-[#F9FAFB]   ">
          <div className=" flex-1 h-40  overflow-y-auto  ">
            <div className="flex justify-end pb-10">
              <p className=" rounded-xl rounded-tr-xs max-w-120  px-4 py-3 bg-blue-100">
                Generate a video building image with glass
              </p>
            </div>
            <div className="flex  justify-center items-center pb-2 relative">
              <img
                src="https://react-demo.tailadmin.com/images/ai/video-thumb.png"
                alt=""
              />
              <a
                className="absolute p-5 bg-white items-center rounded-full justify-center text-[#344054] text-2xl"
                href="https://www.youtube.com/watch?v=_iHmNaQBtKk"
              >
                <FaPlay />
              </a>
            </div>
            <button className="hover:text-gray-700 flex gap-2 items-center bg-white mb-4 p-2 rounded-2xl text-gray-500">
              <MdOutlineFileDownload />
              Download
            </button>
            <p className="pb-10 text-gray-500">
              Here is the tall building with a sleek glass facade, as described.
              The structure features modern elements with reflective glass
              panels that shimmer beautifully under the sunlight.
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
