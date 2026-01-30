import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-500 mt-2">Page not found</p>

      <Link to="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
