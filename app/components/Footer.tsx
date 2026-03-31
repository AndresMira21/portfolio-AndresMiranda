export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
          {/* Columna 1 */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Andrés Miranda</h3>
            <p className="text-gray-200 text-xs sm:text-sm">
              Estudiante de Ingeniería de Software
            </p>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-gray-200 hover:text-white text-xs sm:text-sm">Inicio</a>
              <a href="#proyectos" className="block text-gray-200 hover:text-white text-xs sm:text-sm">Proyectos</a>
              <a href="#acerca" className="block text-gray-200 hover:text-white text-xs sm:text-sm">Acerca</a>
              <a href="#contacto" className="block text-gray-200 hover:text-white text-xs sm:text-sm">Contacto</a>
            </div>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contacto</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <a href="mailto:andresestrada0630@gmail.com" className="block text-gray-200 hover:text-white break-all">
                andresestrada0630@gmail.com
              </a>
              <a href="https://wa.me/573162740777" className="block text-gray-200 hover:text-white">
                +57 3162740777
              </a>
              <p className="text-gray-200">Pasto, Colombia</p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-200 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Andrés Miranda. Todos los derechos reservados.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://github.com/AndresMira21" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 text-[10px] sm:text-xs">
                GH
              </a>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 text-[10px] sm:text-xs">
                LI
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 text-[10px] sm:text-xs">
                TW
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 text-[10px] sm:text-xs">
                IG
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}