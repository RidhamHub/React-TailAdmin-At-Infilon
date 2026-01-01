import { FaRegTrashAlt } from "react-icons/fa";

function RecentOrderCrmCard({
  id,
  shortname,
  name,
  mail,
  product,
  dealvalue,
  crossdate,
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
  if (status == "Complete") {
    color = "green";
  } else if (status == "Pending") {
    color = "orange";
  } else {
    color = "red";
  }

  return (
    <>
      <td className="items-center">
        <div className="flex gap-2 items-center">
          <input className="border-gray-300 rounded-sm" type="checkbox" />
          <p>{id}</p>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <p className="text-red-500 bg-red-100 font-semibold p-2 rounded-full">
            {shortname}
          </p>
          <div>
            <p>{name}</p>
            <p className="text-gray-500 ">{mail}</p>
          </div>
        </div>
      </td>

      <td>{product}</td>
      <td>${dealvalue}</td>
      <td>{crossdate}</td>
      <td className={`text-center  text-xs   `}>
        <p
          className={`px-0.5 py-0.5 rounded-full ${dynamictextcolor[color]} ${dynaicbgcolor[color]}`}
        >
          {status}
        </p>
      </td>
      <td>
        <FaRegTrashAlt className="mx-auto" />
      </td>
    </>
  );
}

export default RecentOrderCrmCard;
