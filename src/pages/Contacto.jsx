import React from 'react';
import landscape from '../assets/fondo.jpg';
import logoPlaceholder from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Comidav from '../assets/comida.jpg'

function Contacto() {
  // Estilo común para header y footer
  const headerFooterStyle = {
    backgroundColor: 'rgba(253, 230, 138, 0.5)', // Amarillo claro con opacidad
    color: 'black', // Texto negro
  };

  return (
    <div className="min-h-screen flex flex-col">
       {/* Header con cuadro transparente y sombra */}
            <header className="relative z-20 p-4 m-4 rounded-lg shadow-md" style={{ boxShadow: '0 0 10px rgba(253, 230, 138, 0.5)' }}>
              <div className="absolute inset-0 bg-orange-50 bg-opacity-50 backdrop-filter rounded-md "></div>
              <div className="relative flex justify-between items-center text-black">
                <div className="flex items-center">
                  <img src={logoPlaceholder} alt="Logo" className="h-8" />
                </div>
                <nav>
                  <ul className="flex space-x-4">
                    <li><Link to="/" className="text-gray-700 hover:text-orange-600" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>Inicio</Link></li>
                    <li><Link to="/contacto" className="text-gray-700 hover:text-orange-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>Contacto</Link></li>
                    <li><Link to="/reservas" className="text-gray-700 hover:text-orange-600" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>Reservas</Link></li>
                    <li><Link to="/menu" className="text-gray-700 hover:text-orange-300" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>Menú</Link></li>
                    <li><Link to="/horario" className="text-gray-700 hover:text-orange-600" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>Horario</Link></li>
                    <li>
                      <button className="bg-orange-50 text-gray-700 hover:text-orange-600 py-0.5 px-4 rounded-full font-semibold hover:bg-orange-200" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}>
                        Registro
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>

      {/* Main Content */}
       <main className="flex-grow flex justify-center items-center relative m-4 border-y min-h-[500px]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${landscape})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(3px) brightness(120%) saturate(120%)', // Aumentado el brillo a 120%
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: -1,
                }}
              ></div>
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 text-orange-50 p-8 rounded-lg shadow-md" style={{ ...headerFooterStyle, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="flex justify-between items-start"> {/* Usamos flexbox para alinear */}
           <div> {/* Contenedor para la información de contacto */}
             <h1 className="text-4xl text-white font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>Contáctanos</h1>
             <p className="text-orange-50 mb-6 text-1xl" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>
              ¡Estamos aquí para ayudarte! Si tienes alguna pregunta, comentario o sugerencia, no dudes en ponerte en contacto con nosotros.
             </p>
      <div className="mb-4">
             <h2 className="text-xl font-semibold mb-2 text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>Información de contacto:</h2>
             <p className="text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}><strong>Dirección:</strong> Calle 123 # 45-67, Bogotá, Colombia</p>
             <p className="text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}><strong>Teléfono:</strong> +57 1 234 5678</p>
             <p className="text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}><strong>Correo electrónico:</strong> info@saborescolombianos.com</p>
      </div>
      <div>
             <h2 className="text-xl font-semibold mb-2 text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>Redes sociales:</h2>
             <p className="text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}><strong>Facebook:</strong> /SaboresColombianos</p>
             <p className="text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}><strong>Instagram:</strong> @saborescolombianos</p>
             <p className="text-white" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}><strong>Twitter:</strong> @SaboresCol</p>
      </div>
    </div>
      <div className="flex justify-end items-start"> {/* Contenedor para la imagen */}
           <img src={Comidav} alt="Comida" className="max-w-[200px] rounded-lg shadow-md" />
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

export default Contacto;