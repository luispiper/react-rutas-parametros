import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="flex justify-center space-x-8">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          Inicio
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          Quiénes somos
        </Link>
        <Link
          to="/mensaje"
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          Mensaje
        </Link>
        <Link
          to="/about/123"
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          Usuario 123
        </Link>
      </div>
    </nav>
  );
}