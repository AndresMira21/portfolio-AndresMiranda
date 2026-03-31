import { Button } from './ui/button';

export function ContactSection() {
  return (
    <section className="bg-white p-4 sm:p-8 rounded-lg shadow-sm mb-6 max-w-6xl mx-auto" id="contacto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-black">Contacto</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-black">Información de Contacto</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <a href="mailto:andresestrada0630@gmail.com" title="Enviar correo" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 hover:bg-blue-700 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5h18v14H3V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 5l9 7 9-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                <a href="mailto:andresestrada0630@gmail.com" className="text-blue-900 hover:underline text-xs sm:text-sm break-all">andresestrada0630@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/AndresMira21" target="_blank" rel="noopener noreferrer" title="Ir a GitHub" className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-full flex items-center justify-center text-white flex-shrink-0 hover:bg-gray-800 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.43 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.07-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.41c1.02.01 2.05.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.47 5.95.43.37.81 1.1.81 2.22 0 1.61-.01 2.91-.01 3.3 0 .32.21.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">GitHub</p>
                <a href="https://github.com/AndresMira21" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:underline text-xs sm:text-sm break-all">AndresMira21</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/andres-camilo-miranda-estrada-364490296" target="_blank" rel="noopener noreferrer" title="Ir a LinkedIn" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 hover:bg-blue-800 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="public/brand-linkedin.svg">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.75 1.75-1.75s1.75.79 1.75 1.76c0 .97-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.55v5.76z" />
                </svg>
              </a>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">LinkedIn</p>
                <a href="https://www.linkedin.com/in/andres-camilo-miranda-estrada-364490296" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:underline text-xs sm:text-sm break-all">Andres Camilo Miranda Estrada</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://wa.me/573162740777" target="_blank" rel="noopener noreferrer" title="Enviar WhatsApp" className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 hover:bg-green-700 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.47-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.67-1.611-.92-2.205-.242-.579-.487-.501-.67-.51l-.57-.01c-.198 0-.52.074-.792.371s-1.04 1.016-1.04 2.48 1.065 2.876 1.213 3.074c.149.198 2.1 3.2 5.077 4.487.71.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347z"/>
                  <path d="M12.004 2.002C6.47 2.002 2 6.475 2 11.998c0 2.079.546 4.09 1.583 5.83L2 22l4.29-1.13c1.67.91 3.57 1.392 5.714 1.392 5.501 0 10-4.467 10-10.002 0-5.523-4.499-9.858-10-9.858zm0 18.19c-1.857 0-3.667-.495-5.234-1.433l-.375-.22-2.54.67.678-2.48-.245-.401C3.04 15.513 2.5 13.784 2.5 11.998c0-4.71 3.82-8.53 8.504-8.53 4.687 0 8.49 3.82 8.49 8.53 0 4.71-3.803 8.53-8.49 8.53z"/>
                </svg>
              </a>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp</p>
                <a href="https://wa.me/573162740777" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:underline text-xs sm:text-sm">+57 3162740777</a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Envíame un mensaje</h3>

          <input type="text" placeholder="Tu nombre" className="w-full h-10 sm:h-12 bg-gray-100 border border-gray-300 rounded px-3 sm:px-4 outline-none focus:border-blue-500 text-sm sm:text-base" />

          <input type="email" placeholder="Tu email" className="w-full h-10 sm:h-12 bg-gray-100 border border-gray-300 rounded px-3 sm:px-4 outline-none focus:border-blue-500 text-sm sm:text-base" />

          <input type="text" placeholder="Asunto" className="w-full h-10 sm:h-12 bg-gray-100 border border-gray-300 rounded px-3 sm:px-4 outline-none focus:border-blue-500 text-sm sm:text-base" />

          <textarea placeholder="Tu mensaje..." className="w-full h-28 sm:h-32 bg-gray-100 border border-gray-300 rounded px-3 sm:px-4 py-2 sm:py-3 outline-none resize-none focus:border-blue-500 text-sm sm:text-base" />

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base">Enviar Mensaje</Button>
        </div>
      </div>
    </section>

  );
}