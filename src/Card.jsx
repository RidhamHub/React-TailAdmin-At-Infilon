export default function Card({
  icon,
  title,
  number,
  change,
  arrow,
  color,
  text,
}) {
  const dynamictextcolor = {
    green: "text-green-500",
    red: "text-red-500",
  };

  const dynaicbgcolor = {
    green: "bg-green-100",
    red: "bg-red-100",
  };

  return (
    <div className="p-6  bg-white rounded-xl border border-[#E4E7EC] shadow-sm">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
        {icon}
      </div>

      <p className="text-gray-500 ">{title}</p>

      <div className="gap-12 flex justify-between">
        <h2 className="text-3xl font-extrabold mt-2">
          {number.toLocaleString()}
        </h2>

        <div className="flex">
          <div
            className={`inline-flex items-center gap-2 px-2  rounded-full text-sm font-semibold ${dynamictextcolor[color]} ${dynaicbgcolor[color]}`}
          >
            {arrow}
            <span>{change}%</span>
          </div>

          {text && (
            <p className="text-sm text-gray-500 w-[50%]">Vs last month</p>
          )}
        </div>
      </div>
    </div>
  );
}
