import React, { useState } from 'react';
import landscape from '../assets/fondo.jpg';
import logoPlaceholder from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Horario() {
  const [horario, setHorario] = useState({
    atencion: '12:00 PM - 10:00 PM',
    cocina: '12:00 PM - 9:30 PM',
  });

  const getHorario = (day) => {
    if (day >= 1 && day <= 5) {
      setHorario({ atencion: '12:00 PM - 10:00 PM', cocina: '12:00 PM - 9:30 PM' });
    } else if (day === 6) {
      setHorario({ atencion: '1:00 PM - 11:00 PM', cocina: '1:00 PM - 10:30 PM' });
    } else {
      setHorario({ atencion: '1:00 PM - 9:00 PM', cocina: '1:00 PM - 8:30 PM' });
    }
  };

  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

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

      {/* Main Content (información de horario) */}
      <main className="flex-grow flex justify-center items-center relative m-4 border-y min-h-[700px]">
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

        <div className="text-black p-8 flex flex-col items-center">
          <h1 className="text-7xl font-bold mb-4 text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>Nuestro Horario</h1>
          <p className="text-2xl text-orange-50 mb-6 text-center">
            ¡Te esperamos con los mejores sabores! Consulta nuestros horarios de atención.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Horarios de atención:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {diasSemana.map((dia, index) => (
                <div
                  key={index}
                  className="border p-4 rounded transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg hover:bg-gray-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <h3
                    className="font-semibold text-orange-50"
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {dia}
                  </h3>
                  <p className="text-gray-300">Atención: {horario.atencion}</p>
                  <p className="text-gray-300">Cocina: {horario.cocina}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer (reutilizado) */}
      <footer className="bg-opacity-50 bg-orange-50 text-black p-4 text-center m-4 rounded-md shadow-md">
        <p className="text-sm">
          2025 Sabores Colombianos <span className="font-semibold">Todos los derechos reservados</span>
        </p>
      </footer>
    </div>
  );
}

export default Horario;