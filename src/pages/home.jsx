import React, { useState } from 'react';
import landscape from '../assets/fondo.jpg';
import logoPlaceholder from '../assets/logo.png';
import Comidav from '../assets/comidav.jpg';
import comida  from '../assets/comida.jpg'
import comidas  from '../assets/comidass.jpg'
import { Link } from 'react-router-dom';

function Home() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const toggleInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header con cuadro transparente y sombra */}
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

      {/* Main Content con paisaje de fondo difuminado y panel transparente */}
      <main className="flex-grow flex justify-center items-center relative m-4 border-y min-h-[1100px]">
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
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 text-white p-8 rounded-lg flex items-center justify-between w-[80%]">
          <div className="w-1/2">
            <h2 className="text-7xl font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>Restaurante Sabores Colombianos</h2>
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em', textShadow: '0 0 5px rgba(255, 255, 255, 0.8)' }}>
              Tu destino culinario
            </h1>
            <p className="text-2xl font-normal text-gray-300">
              Entendemos que tu tiempo es valioso y tu apetito insaciable. Es por eso que hemos reinventado la experiencia gastronómica, combinando la deliciosa comida con la eficiencia de la tecnología.
            </p>
            {mostrarInfo && (
              <div className="mt-4">
                <h2 className="text-4xl font-semibold mb-2" style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.8)' }}>Sobre nosotros</h2>
                <p className="text-2xl text-gray-300">
                  Sabores Colombianos es un restaurante que celebra la rica tradición culinaria de Colombia. Nos apasiona ofrecer platos auténticos y deliciosos, preparados con ingredientes frescos y de la más alta calidad.
                </p>
                <p className="text-2xl text-gray-300 mt-2">
                  Nuestro ambiente acogedor y nuestro servicio excepcional te harán sentir como en casa. ¡Ven y descubre los sabores de Colombia!
                </p>
                <p className="text-2xl text-gray-300 mt-2">
                  Ofrecemos una amplia variedad de platos tradicionales, desde la icónica bandeja paisa hasta el reconfortante ajiaco. También contamos con opciones vegetarianas y veganas para satisfacer todos los gustos.
                </p>
                <p className="text-2xl text-gray-300 mt-2">
                  ¡Te esperamos en Sabores Colombianos para una experiencia gastronómica inolvidable!
                </p>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-full mt-4"
                  onClick={toggleInfo}
                >
                  Cerrar
                </button>
              </div>
            )}
            {!mostrarInfo && (
              <button
                className="bg-gray-700 text-orange-50 hover:text-orange-300 py-2 px-4 rounded-full font-semibold hover:bg-orange-100 mt-4"
                style={{ fontFamily: 'Roboto, sans-serif', textShadow: '0 0 5px rgba(255, 165, 0, 0.7)' }}
                onClick={toggleInfo}
              >
                Más información
              </button>
            )}
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <img src={Comidav} alt="Comida" className="max-w-[400px] rounded-lg shadow-md" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-opacity-50 bg-gray-700 text-orange-50 p-4 text-center m-4 rounded-md shadow-md">
        <p className="text-sm">
          2025 Sabores Colombianos <span className="font-semibold">Todos los derechos reservados</span>
        </p>
      </footer>
    </div>
  );
}

export default Home;