export default function AnaCard({ icon, title, number, change, color ,text}) {
  const dynamictextcolor = {
    green: "text-green-500",
    red: "text-red-500",
  };

  const dynaicbgcolor = {
    green: "bg-green-100",
    red: "bg-red-100",
  };

  return (
    <div className="p-6 pb-1    bg-white rounded-xl border border-[#E4E7EC] shadow-sm">
      {icon && (
        <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
          {icon}
        </div>
      )}
      <p className="text-gray-500 text-xs">{title}</p>

      <div className=" flex gap-2 mt-2 ">
        <p className="text-xl font-bold">{number.toLocaleString()}</p>

        <div className="flex items-center gap-1">
          <div
            className={`${
              icon && "ml-7"
            } px-1 py-0.5 rounded-full text-xs  ${
              dynamictextcolor[color]
            } ${dynaicbgcolor[color]}`}
          >
            {change}%
          </div>

          <span className="text-xs text-gray-500 ">{text}</span>
        </div>
      </div>
    </div>
  );
}
