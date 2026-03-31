"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function HeroSection () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg sm:text-xl font-bold text-black">Mi Portafolio</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <a href="#inicio" className="text-gray-900 hover:text-blue-700">Inicio</a>
              <a href="#proyectos" className="text-gray-900 hover:text-blue-700">Proyectos</a>
              <a href="#acerca" className="text-gray-900 hover:text-blue-700">Acerca</a>
              <a href="#contacto" className="text-gray-900 hover:text-blue-700">Contacto</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <a href="#inicio" className="text-gray-900 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#proyectos" className="text-gray-900 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
              <a href="#acerca" className="text-gray-900 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>Acerca</a>
              <a href="#contacto" className="text-gray-900 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white p-4 sm:p-8 rounded-lg shadow-sm mb-6 max-w-6xl mx-auto mt-6" id="inicio">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Hola, soy Andrés Camilo Miranda Estrada 
            </h1>
            <p className="text-base sm:text-lg text-gray-900 mb-4 font-semibold">
              Estudiante de Ingeniería de Software apasionado por el desarrollo web, la inteligencia artificial y la creación de soluciones tecnológicas innovadoras.
            </p>
            <p className="text-sm sm:text-base text-gray-900 mb-6 font-medium">
              Me especializo en el desarrollo de aplicaciones modernas, combinando backend robusto y frontend interactivo. Me interesa especialmente aplicar la tecnología para resolver problemas reales en áreas como finanzas, salud y sistemas inteligentes.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {/*<Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base">
                📄 Descargar CV
              </Button>*/}
            </div>
          </div>
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-600 flex-shrink-0 flex items-center justify-center text-blue-900 text-sm bg-blue-50 font-semibold">
            Foto
          </div>
        </div>
      </section>
    </>
  );
}