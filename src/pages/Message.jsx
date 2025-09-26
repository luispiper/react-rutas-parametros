export default function Message({ mensaje }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Mensaje</h1>
      <p>{mensaje}</p>
    </div>
  );
}