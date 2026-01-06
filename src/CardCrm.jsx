function CardCrm({ price, text, percent, color }) {
  const dynamictextcolor = {
    green: "text-green-500",
    red: "text-red-500",
  };

  const dynaicbgcolor = {
    green: "bg-green-100",
    red: "bg-red-100",
  };

  return (
    <div className="bg-white p-5  rounded-2xl border border-[#E4E7EC]">
      <p className="font-bold text-2xl">{price}</p>
      <div className="flex gap-15 mt-7 text-sm">
        <p>{text}</p>
        <div className="flex gap-1">
          <div>
            <p
              className={` px-2 py-1 rounded-full text-xs font-semibold ${dynamictextcolor[color]} ${dynaicbgcolor[color]}`}
            >
              {percent}%
            </p>
          </div>
          <p>last month</p>
        </div>
      </div>
    </div>
  );
}

export default CardCrm;
