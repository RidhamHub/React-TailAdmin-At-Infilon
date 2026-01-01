function RecentOrder({ pphoto, name, count, catagery, price, status }) {
  const link = `./src/assets/${pphoto}`;
  // console.log("link", link)

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
  if (status == "Delivered") {
    color = "green";
  } else if (status == "Pending") {
    color = "orange";
  } else {
    color = "red";
  }

  return (
    <>
      <td className="flex items-center gap-2">
        <img className="h-17 w-17" src={link} alt="" />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">{count} variants</p>
        </div>
      </td>

      <td className="text-gray-500 text-sm">${price}</td>
      <td className="text-gray-500 text-sm ">{catagery}</td>
      <td>
        <p
          className={`px-2 text-sm py-0.5 rounded-full ${dynamictextcolor[color]} ${dynaicbgcolor[color]}`}
        >
          {status}
        </p>
      </td>
    </>
  );
}

export default RecentOrder;
