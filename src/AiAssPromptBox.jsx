import { RiLink } from "react-icons/ri";
import { BsArrowUpSquareFill } from "react-icons/bs";

function AiAssPromptBox() {
  return (
    <>
      <div className="w-full border border-gray-200 bg-white rounded-2xl  ">
        <textarea
          className="p-7 resize-none text-gray-800 placeholder:text-gray-400 border-none w-full"
          placeholder="type your prompt here..."
          name=""
          id=""
        ></textarea>

        <div className="flex justify-between p-5">
          <button className="flex gap-2 items-center text-gray-400">
            <RiLink /> Attach
          </button>
          <button>
            <BsArrowUpSquareFill className="w-7 h-7" />
          </button>
        </div>
      </div>
    </>
  );
}

export default AiAssPromptBox;
