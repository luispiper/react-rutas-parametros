import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Compañía: {user.company.name}</p>
    </div>
  );
}

export default UserDetail;