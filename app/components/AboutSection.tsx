export function AboutSection() {
    return (
        <section className="bg-white p-4 sm:p-8 rounded-lg shadow-sm mb-6 max-w-6xl mx-auto" id="about">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Acerca de mi</h2>
            <div className="space-y-4 mb-6">
                <p className="text-sm sm:text-base text-gray-900 font-medium">
                  Soy estudiante de Ingeniería de Software con enfoque en desarrollo full stack y soluciones basadas en inteligencia artificial. Me caracterizo por ser autodidacta, proactivo y orientado a resultados.
                </p>
                <p className="text-sm sm:text-base text-gray-900 font-medium">
                  He trabajado en diversos proyectos académicos y personales que me han permitido desarrollar habilidades sólidas en programación, diseño de sistemas y resolución de problemas.
                </p>
            </div>

            <div className="mb-6">
                <h3 className="font-bold text-base sm:text-lg mb-3">Me interesa especialmente:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-900 font-medium">
                  <li>Desarrollo de software escalable</li>
                  <li>Inteligencia artificial aplicada</li>
                  <li>Sistemas web modernos</li>
                  <li>Automatización de procesos</li>
                </ul>
            </div>
        </section>
    );
}