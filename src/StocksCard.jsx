export default function StocksCard({
  icon,
  title,
  number,
  arrow,
  change,
  color,
}) {
  const dynamictextcolor = {
    green: "text-green-500",
    red: "text-red-500",
  };

  const dynaicbgcolor = {
    green: "bg-green-50",
    red: "bg-red-50",
  };

  return (
    <div className="w-full p-5 pb-2  bg-white rounded-xl border border-[#E4E7EC] shadow-sm">
      <div className="flex gap-2">
        <img
          src={icon}
          alt=""
        />
        <div>
          <p className="text-gray-800 font-semibold ">{title}</p>
          <p className="text-gray-500 text-xs">{title}</p>
        </div>
      </div>

      <div className="pt-5  flex gap-2  ">
        <p className="text-gray-800 font-semibold text-lg">
          ${number.toLocaleString()}
        </p>

        <div
          className={`inline-flex items-center gap-2 px-2  rounded-full text-xs font-semibold  ${dynamictextcolor[color]} ${dynaicbgcolor[color]}`}
        >
          <span>{arrow}</span>
          <span>{change}%</span>
        </div>
      </div>
    </div>
  );
}
