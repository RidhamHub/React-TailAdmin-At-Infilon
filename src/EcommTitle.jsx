import { MdKeyboardArrowRight } from "react-icons/md";

function EcommTitle({ title }) {
  return (
    <>
      <div className="p-7 pb-0 flex   justify-between bg-[#F9FAFB]">
        <p className="text-xl font-semibold text-gray-800">{title}</p>
        <div className="flex items-center gap-1.5">
          <p className="text-sm text-gray-500">Home</p>
          <MdKeyboardArrowRight />
          <p className="text-sm text-gray-800">{title}</p>
        </div>
      </div>
    </>
  );
}

export default EcommTitle;
