import React, { useState } from 'react';
import landscape from '../assets/fondo.jpg';
import logoPlaceholder from '../assets/logo.png';
import mesaImage from '../assets/mesa_1.jpg'; 
import { Link } from 'react-router-dom';

function Reservas() {
  const mesas = ['1B', '2B', '3B', '4B'];
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  const handleMesaClick = (mesa) => {
    setMesaSeleccionada(mesa);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header (reutilizado) */}
      <header className="relative z-20 p-4 m-4 rounded-lg shadow-md" style={{ boxShadow: '0 0 10px rgba(253, 230, 138, 0.5)' }}>
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50 backdrop-filter rounded-md "></div>
        <div className="relative flex justify-between items-center text-black">
          <div className="flex items-center">
            <img src={logoPlaceholder} alt="Logo" className="h-8" />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-orange-50 hover:text-orange-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>Inicio</Link></li>
              <li><Link to="/contacto" className="text-orange-50 hover:text-orange-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>Contacto</Link></li>
              <li><Link to="/reservas" className="text-orange-50 hover:text-orange-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>Reservas</Link></li>
              <li><Link to="/menu" className="text-orange-50 hover:text-orange-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>Menú</Link></li>
              <li><Link to="/horario" className="text-orange-50 hover:text-orange-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>Horario</Link></li>
              <li>
                <button className="bg-gray-700 text-orange-50 hover:text-orange-300 py-0.5 px-4 rounded-full font-semibold hover:bg-gray-600" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>
                  Registro
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content (información de reservas) */}
      <main className="flex-grow flex justify-center items-center relative m-4 border-y min-h-[1200px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${landscape})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px) brightness(120%) saturate(120%)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        ></div>

        {/* Información de reservas fuera de la caja */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-[80%]">
          <div className="text-center"> {/* Cambiado a text-center */}
            <h1 className="text-7xl font-bold mb-4 text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>¡Reserva tu mesa!</h1>
            <p className="text-gray-300 mb-6 text-2xl" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>
              Disfruta de una experiencia culinaria inolvidable en Sabores Colombianos.
            </p>
            <div className="mb-4 text-left"> {/* Vuelto a text-left */}
              <h2 className="text-xl font-semibold mb-2 text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>Información de contacto:</h2>
              <p className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}><strong>Teléfono:</strong> +57 1 234 5678</p>
              <p className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}><strong>Correo electrónico:</strong> reservas@saborescolombianos.com</p>
            </div>
            <div className="text-left">
              <h2 className="text-xl font-semibold mb-2 text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>Horario de reservas:</h2>
              <p className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}><strong>Lunes a Sábado:</strong> 12:00 PM - 9:00 PM</p>
              <p className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}><strong>Domingos:</strong> 1:00 PM - 8:00 PM</p>
            </div>
          </div>

          {/* Mapeado de mesas justo debajo de la información de reservas */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-white text-center" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>Mesas disponibles:</h2>
            <div className="grid grid-cols-2 gap-4">
              {mesas.map((mesa) => (
                <div
                  key={mesa}
                  className={`relative bg-gray-800 text-white p-4 rounded-lg text-center cursor-pointer transition-all duration-300 
                    ${mesaSeleccionada === mesa ? 'border-2 border-orange-500 shadow-md' : 'hover:bg-gray-700'}`}
                  onClick={() => handleMesaClick(mesa)}
                >
                  <img src={mesaImage} alt={`Mesa ${mesa}`} className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {mesa}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-opacity-50 bg-orange-50 text-gray-700 p-4 text-center m-4 rounded-md shadow-md" style={{ boxShadow: '0 0 10px rgba(253, 230, 138, 0.5)' }}>
        <p className="text-sm">
          2025 Sabores Colombianos <span className="font-semibold">Todos los derechos reservados</span>
        </p>
      </footer>
    </div>
  );
}

export default Reservas;