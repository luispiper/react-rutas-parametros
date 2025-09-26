import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Detalle del Usuario</h1>
      <p className="text-gray-600 mt-4">Mostrando información para el usuario con ID:</p>
      <p className="text-blue-600 font-semibold text-lg mt-2">{id}</p>
    </div>
  );
}