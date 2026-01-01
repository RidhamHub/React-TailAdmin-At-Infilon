function FeaturedCampaignsCard({
  profile,
  name,
  compney,
  str,
  campaign,
  status,
}) {
  const dynamictextcolor = {
    green: "text-green-500",
    red: "text-red-500",
    orange: "text-orange-500",
  };

  const dynaicbgcolor = {
    green: "bg-green-100",
    red: "bg-red-100",
    orange: "bg-orange-100",
  };
  let color = null;
  if (status == "Success") {
    color = "green";
  } else if (status == "Pending") {
    color = "orange";
  } else {
    color = "red";
  }

  return (
    <div className="flex justify-between  items-center my-3">
      <div className="flex items-center gap-2">
        <img src={profile} alt="" className="h-10 w-10" />
        <p className="text-gray-700">{name}</p>
      </div>

      <div className="flex gap-2 ">
        <img src={compney} alt="" />
        <div>
          <p className="text-gray-700 font-semibold">{str}</p>
          <p className="text-gray-500 text-sm">{campaign}</p>
        </div>
      </div>

      <div className="flex felx-col items-start">
        <p
          className={`px-2 py-0.5  rounded-full text-xs font-semibold  ${dynamictextcolor[color]} ${dynaicbgcolor[color]}`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}

export default FeaturedCampaignsCard;
