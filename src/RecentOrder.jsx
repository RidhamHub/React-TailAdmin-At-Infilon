function RecentOrder({ pphoto, name, count, catagery, price, status }) {
  const link = `./src/assets/${pphoto}`;
  // console.log("link", link)

  const dynamictextcolor = {
    green: "text-green-600",
    red: "text-red-600",
    orange: "text-orange-600",
  };

  const dynaicbgcolor = {
    green: "bg-green-50",
    red: "bg-red-50",
    orange: "bg-orange-50",
  };
  let color = null;
  if (status == "Delivered") {
    color = "green";
  } else if (status == "Pending") {
    color = "orange";
  } else {
    color = "red";
  }

  return (
    <>
      <td className="flex items-center gap-2 mr-10">
        <img className="h-15 w-15" src={link} alt="" />
        <div>
          <p className="font-medium text-gray-800 text-theme-sm ">{name}</p>
          <p className="text-gray-500 text-sm">{count} variants</p>
        </div>
      </td>

      <td className="text-gray-500 text-sm">${price}</td>
      <td className="text-gray-500 text-sm  ">
        <p className="px-5 ">{catagery}</p>
      </td>
      <td>
        <p
          className={`text-sm px-2  py-0.5 rounded-full ${dynamictextcolor[color]} ${dynaicbgcolor[color]}`}
        >
          {status}
        </p>
      </td>
      
    </>
  );
}

export default RecentOrder;
