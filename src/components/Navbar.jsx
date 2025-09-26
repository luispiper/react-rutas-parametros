import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-center space-x-6">
      <Link to="/">Inicio</Link>
      <Link to="/about">Quiénes somos</Link>
      <Link to="/mensaje">Mensaje</Link>
    </nav>
  );
};

export default Navbar;