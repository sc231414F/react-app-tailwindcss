import React from 'react';
import landscape from '../assets/Mesa.jpg'; // Reutilizamos el fondo
import logoPlaceholder from '../assets/logo.png'; // Reutilizamos el logo
import { Link } from 'react-router-dom';

function Horario() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header (reutilizado) */}
      <header className="relative z-20 p-4 m-4 c rounded-lg shadow-md">
        <div className="absolute inset-0 bg-orange-50 bg-opacity-50 backdrop-filter blur-md"></div>
        <div className="relative flex justify-between items-center text-black">
          <div className="flex items-center">
            <img src={logoPlaceholder} alt="Logo" className="h-8" />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-orange-300">Inicio</Link></li>
              <li><Link to="/contacto" className="hover:text-orange-300">Contacto</Link></li>
              <li><Link to="/reservas" className="hover:text-orange-300">Reservas</Link></li>
              <li><Link to="/menu" className="hover:text-orange-300">Menú</Link></li>
              <li><Link to="/horario" className="hover:text-orange-300">Horario</Link></li>
              <li>
                <button className="bg-orange-50 hover:text-orange-300 text-black py-0.5 px-4 rounded-full font-semibold hover:bg-orange-100">
                  Registro
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content (información de horario) */}
      <main className="flex-grow flex justify-center items-center relative m-4">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${landscape})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px) brightness(80%) saturate(120%)',
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 text-black p-8 rounded-lg bg-orange-50 shadow-md">
          <h1 className="text-4xl font-bold mb-4">Nuestro Horario</h1>
          <p className="text-gray-700 mb-6">
            ¡Te esperamos con los mejores sabores! Consulta nuestros horarios de atención.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Horario de atención:</h2>
            <p><strong>Lunes a Viernes:</strong> 12:00 PM - 10:00 PM</p>
            <p><strong>Sábados:</strong> 1:00 PM - 11:00 PM</p>
            <p><strong>Domingos:</strong> 1:00 PM - 9:00 PM</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Horario de cocina:</h2>
            <p><strong>Lunes a Viernes:</strong> 12:00 PM - 9:30 PM</p>
            <p><strong>Sábados:</strong> 1:00 PM - 10:30 PM</p>
            <p><strong>Domingos:</strong> 1:00 PM - 8:30 PM</p>
          </div>
        </div>
      </main>

      {/* Footer (reutilizado) */}
      <footer className="bg-opacity-50 bg-orange-50 text-black p-4 text-center m-4 rounded-md shadow-md">
        <p className="text-sm">
          2025 Sabores Colombianos <span className="font-semibold" bg-opacity-50>Todos los derechos reservados</span>
        </p>
      </footer>
    </div>
  );
}

export default Horario;