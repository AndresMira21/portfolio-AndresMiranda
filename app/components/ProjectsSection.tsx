export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: '🔹 LegalConnect',
      description: 'Plataforma tecnológica orientada al apoyo del trabajo legal. Permite analizar cláusulas contractuales, identificar posibles riesgos y facilitar la toma de decisiones informadas mediante el uso de inteligencia artificial.',
      technologies: 'Java + Spring Boot, React, PostgreSQL, APIs REST',
      githubFront: 'https://github.com/AndresMira21/analyzer-contract-frontend.git',
      githubBack: 'https://github.com/AndresMira21/analyzer-contract-backend.git',
      demo: 'https://analyzer-contract-frontend-kohl.vercel.app',
      image: '/LegalConnect.png'
    },
    {
      id: 2,
      title: '🔹 FinAssistant',
      description: 'Aplicación basada en inteligencia artificial diseñada para resolver problemas de matemáticas financieras. Permite realizar cálculos complejos, explicar procedimientos paso a paso y apoyar el aprendizaje en temas financieros de manera interactiva.',
      technologies: 'Django, APIs de IA',
      github: 'https://github.com/AndresMira21/AIFinAssistant.git',
      demo: 'https://aifinassistant.onrender.com',
      image: '/AIFinAssistant.png'
    },
    {
      id: 3,
      title: '🔹 Sistema de Historia Clínica',
      description: 'Sistema web para la gestión de historias clínicas digitales, que permite almacenar información de pacientes, registros médicos, consentimientos informados y resultados de pruebas. Diseñado para mejorar la organización, seguridad y acceso a la información en entornos de salud.',
      technologies: 'PHP, SQL, HTML, CSS, JavaScript',
      github: 'https://github.com/AndresMira21/intracond_HCE',
      image: '/intracondHC.png'
    }
  ];

  return (
    <section className="bg-white p-4 sm:p-8 rounded-lg shadow-sm mb-6 max-w-6xl mx-auto" id="proyectos">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center"> Mis Proyectos</h2>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="border-2 border-gray-200 rounded-lg p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>

                <div className="mb-3">
                  <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Descripción:</p>
                  <p className="text-gray-900 text-sm sm:text-base">{project.description}</p>
                </div>

                <div className="mb-3">
                  <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Tecnologías:</p>
                  <p className="text-gray-900 text-sm sm:text-base">{project.technologies}</p>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.githubFront && (
                    <a
                      href={project.githubFront}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 text-xs sm:text-sm"
                    >
                      🔗 GitHub Frontend
                    </a>
                  )}
                  {project.githubBack && (
                    <a
                      href={project.githubBack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 text-xs sm:text-sm"
                    >
                      🔗 GitHub Backend
                    </a>
                  )}
                  {project.github && !project.githubFront && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 text-xs sm:text-sm"
                    >
                      🔗 GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs sm:text-sm"
                    >
                     Demo
                    </a>
                  )}
                </div>
              </div>

              <div>
                <a
                  href={project.demo || project.githubFront || project.githubBack || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <img
                    src={project.image || `https://via.placeholder.com/600x360.png?text=${encodeURIComponent(project.title.replace('🔹 ', ''))}`}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-2 border-blue-100 bg-blue-50 rounded-xl p-5 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-blue-900">Otros proyectos académicos y personales</h3>
        <p className="text-gray-900 leading-relaxed mb-2">
          Además de los proyectos principales, he desarrollado múltiples aplicaciones y scripts que abarcan desde CRUD completos hasta automatizaciones de tareas.
          En el ámbito académico construí sistemas como gestores de biblioteca y plataformas de encuestas, aplicando arquitectura MVC, autenticación de usuarios y bases de datos relacionales.
        </p>
        <p className="text-gray-900 leading-relaxed mb-2">
          En proyectos independientes he creado CRUDs funcionales (productos, contactos) con interfaces limpias y lógica de negocio, así como scripts de automatización en Python y Node.js para generación de reportes, envío de correos y procesamiento de datos.
        </p>
        <p className="text-gray-900 leading-relaxed">
          Estos trabajos consolidan habilidades en desarrollo full-stack, manejo de bases de datos, validaciones y eficiencia en tareas repetitivas.
        </p>
      </div>
    </section>
  );
}