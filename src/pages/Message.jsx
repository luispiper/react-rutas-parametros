export default function Message({ mensaje }) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600">{mensaje}</h1>
      <p className="text-sm text-gray-500 mt-2">Mensaje dinámico desde App.jsx</p>
    </div>
  );
}