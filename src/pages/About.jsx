import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
        Quiénes somos
      </h1>
      <p className="text-gray-600 mt-4 text-center">
        A continuación encontrarás el listado de empleados.
      </p>

      <ul className="mt-8 space-y-3 max-w-md mx-auto">
  {users.map((user) => (
    <li key={user.id} className="card">
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ))}
</ul>

    </div>
  );
}
