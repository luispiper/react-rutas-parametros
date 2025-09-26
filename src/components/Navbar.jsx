import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md w-64 h-screen p-6 fixed left-0 top-0">
      {/* Logo o título */}
      <h1 className="text-2xl font-bold text-blue-600 mb-8">
        Luis Felipe Restrepo
      </h1>

      {/* Links en lista vertical */}
      <div className="flex flex-col space-y-4">
        <Link
          to="/"
          className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
        >
          Inicio
        </Link>
        <Link
          to="/about"
          className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
        >
          Quiénes somos
        </Link>
        <Link
          to="/mensaje"
          className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
        >
          Mensaje
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
