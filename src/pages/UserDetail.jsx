import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando usuario...</p>;

  return (
    <div className="card" style={{ maxWidth: "600px", margin: "2rem auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Ciudad: {user.address.city}</p>
      <p>Compañía: {user.company.name}</p>

      <Link
        to="/about"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          backgroundColor: "var(--accent)",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "var(--radius)",
          textDecoration: "none",
          transition: "background-color .2s ease"
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = "#1e40af")}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = "var(--accent)")}
      >
        Volver al listado
      </Link>
    </div>
  );
}
