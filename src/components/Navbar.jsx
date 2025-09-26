import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="text-xl font-bold">Mi App</div>
        <div>
          <Link to="/">Inicio</Link>
          <Link to="/about">Quiénes somos</Link>
          <Link to="/message">Mensaje</Link>
        </div>
      </div>
    </nav>
  );
}
