export default function About() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-semibold text-gray-800">Quiénes somos</h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Este proyecto fue desarrollado como parte de la actividad académica. 
        Aunque se presenta como un equipo, el desarrollo fue realizado por un solo estudiante.
      </p>

      {/* Listado de personas */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Nuestro equipo</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="p-3 bg-gray-100 rounded-lg shadow-sm">
            <strong>Luis Felipe Restrepo</strong> – Desarrollador Frontend
          </li>
          <li className="p-3 bg-gray-100 rounded-lg shadow-sm">
            <strong>Luis Felipe Restrepo</strong> – Diseñador UX/UI
          </li>
          <li className="p-3 bg-gray-100 rounded-lg shadow-sm">
            <strong>Luis Felipe Restrepo</strong> – Desarrollador Backend
          </li>
          <li className="p-3 bg-gray-100 rounded-lg shadow-sm">
            <strong>Luis Felipe Restrepo</strong> – QA Tester
          </li>
        </ul>
      </div>
    </div>
  );
}
