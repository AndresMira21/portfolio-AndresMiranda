export function ExperienceSection() {
  return (
    <section className="bg-white p-4 sm:p-8 rounded-lg shadow-sm mb-6 max-w-6xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Experiencia</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline izquierda: Académica */}
        <div className="relative pt-4">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Experiencia Académica</h3>

          <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gray-300" />
          <div className="space-y-6 pl-10">
            <article className="relative bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="absolute -left-5 top-5 h-3 w-3 rounded-full bg-blue-600 border-2 border-white" />
              <p className="text-xs uppercase font-semibold tracking-wide text-blue-900">2024 - Presente</p>
              <h4 className="font-bold text-base sm:text-lg text-gray-900">Ingeniería de Software</h4>
              <p className="text-sm text-gray-900">Universidad Cooperativa de Colombia – Campus Pasto</p>
            </article>

            <article className="relative bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="absolute -left-5 top-5 h-3 w-3 rounded-full bg-blue-600 border-2 border-white" />
              <p className="text-xs uppercase font-semibold tracking-wide text-blue-900">2023 - 2025</p>
              <h4 className="font-bold text-base sm:text-lg text-gray-900">Técnico Laboral en Soporte, Sistemas e Informática</h4>
              <p className="text-sm text-gray-900">CINAR Sistemas</p>
            </article>

            <article className="relative bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="absolute -left-5 top-5 h-3 w-3 rounded-full bg-blue-600 border-2 border-white" />
              <p className="text-xs uppercase font-semibold tracking-wide text-blue-900">Finalizado 2023</p>
              <h4 className="font-bold text-base sm:text-lg text-gray-900">Bachiller Académico</h4>
              <p className="text-sm text-gray-900">Instituto San Francisco de Asís</p>
            </article>
          </div>
        </div>

        {/* Timeline derecha: Laboral */}
        <div className="relative pt-4">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Experiencia Laboral</h3>

          <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gray-300" />
          <div className="space-y-6 pl-10">
            <article className="relative bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm">
              <div className="absolute -left-5 top-5 h-3 w-3 rounded-full bg-purple-600 border-2 border-white" />
              <p className="text-xs uppercase font-semibold tracking-wide text-purple-700">Ene 2025 - Jun 2025</p>
              <h4 className="font-bold text-base sm:text-lg">Auxiliar en Soporte y Sistemas</h4>
              <p className="text-sm text-purple-700 font-semibold">Politécnico San Juan de Pasto</p>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-900 space-y-1">
                <li>Mantenimientos preventivos y correctivos a equipos de cómputo</li>
                <li>Instalación/configuración de redes cableadas e inalámbricas</li>
                <li>Instalación y configuración de cámaras de seguridad</li>
                <li>Soporte a usuarios en plataformas digitales</li>
              </ul>
            </article>

            <article className="relative bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm">
              <div className="absolute -left-5 top-5 h-3 w-3 rounded-full bg-purple-600 border-2 border-white" />
              <p className="text-xs uppercase font-semibold tracking-wide text-purple-700">2018 - 2020</p>
              <h4 className="font-bold text-base sm:text-lg">Auxiliar Administrativo</h4>
              <p className="text-sm text-purple-700 font-semibold">Mundo Click</p>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-900 space-y-1">
                <li>Monitoreo y control de inventario de materiales y productos</li>
                <li>Organización y gestión de recursos administrativos</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}