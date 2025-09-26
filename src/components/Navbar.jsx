import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-4">
      <Link to="/">Inicio</Link>
      <Link to="/about">Quiénes somos</Link>
      <Link to="/mensaje">Mensaje</Link>
    </nav>
  );
}

export default Navbar;