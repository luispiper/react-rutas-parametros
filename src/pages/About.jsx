import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quiénes somos</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            <Link to={`/about/${user.id}`} className="text-blue-500">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;