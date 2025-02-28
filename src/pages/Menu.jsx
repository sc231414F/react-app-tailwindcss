import React, { useState } from 'react';
import landscape from '../assets/fondo.jpg';
import logoPlaceholder from '../assets/logo.png';
import Ajiaco from '../assets/icons-menú/ajiaco.png';
import BandejaP from '../assets/icons-menú/bandejapaisa.png';
import Cafecol from '../assets/icons-menú/cafecolombiano.png';
import Lulo from '../assets/icons-menú/jugodelulo.png';
import Lechona from '../assets/icons-menú/lechona.png';
import Limonada from '../assets/icons-menú/limonada.png';
import Trucha from '../assets/icons-menú/trucha.png';
import { Link } from 'react-router-dom';

function Menu() {
    const platosPrincipales = [
      { nombre: 'Bandeja Paisa', descripcion: 'Un plato abundante con arroz, frijoles, carne molida, chicharrón, huevo, aguacate y plátano maduro.', comentario: '¡Deliciosa y abundante!', imagen: BandejaP },
      { nombre: 'Ajiaco', descripcion: 'Una sopa espesa de pollo, papas, maíz y guascas, servida con crema de leche y alcaparras.', comentario: '¡Perfecto para un día frío!', imagen: Ajiaco },
      { nombre: 'Lechona', descripcion: 'Cerdo entero relleno de arroz, arvejas y especias, horneado hasta quedar crujiente.', comentario: '¡Crujiente y llena de sabor!', imagen: Lechona },
      { nombre: 'Trucha Arcoíris', descripcion: 'Trucha fresca a la parrilla, acompañada de ensalada y papas criollas.', comentario: '¡Fresca y deliciosa!', imagen: Trucha },
    ];
  
    const bebidas = [
      { nombre: 'Jugo de Lulo', descripcion: 'Jugo refrescante de lulo, una fruta cítrica y aromática.', comentario: '¡Refrescante y exótico!', imagen: Lulo },
      { nombre: 'Limonada de Coco', descripcion: 'Limonada cremosa con leche de coco y un toque de limón.', comentario: '¡Cremosa y deliciosa!', imagen: Limonada },
      { nombre: 'Café Colombiano', descripcion: 'Café de alta calidad, cultivado en las montañas de Colombia.', comentario: '¡Aromático y lleno de sabor!', imagen: Cafecol },
    ];
  
    const [platoSeleccionado, setPlatoSeleccionado] = useState(null);
    const [bebidaSeleccionada, setBebidaSeleccionada] = useState(null);
  
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
  
        {/* Menú debajo del header */}
        <div className="relative flex w-full">
          {/* Carta del menú a la izquierda */}
          <div className="w-1/4 p-8 bg-gray-800 text-white rounded-l-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Menú</h2>
            <h3 className="text-xl font-semibold mb-2">Platos Principales</h3>
            <ul>
              {platosPrincipales.map((plato, index) => (
                <li
                  key={index}
                  className={`flex items-center cursor-pointer p-2 rounded-md transition-colors duration-300 ${platoSeleccionado === plato ? 'bg-gray-600' : 'hover:bg-gray-700 hover:outline hover:outline-gray-700'}`}
                  onClick={() => setPlatoSeleccionado(plato)}
                >
                  <img src={plato.imagen} alt={plato.nombre} className="w-8 h-8 mr-2" />
                  {plato.nombre}
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">Bebidas</h3>
            <ul>
              {bebidas.map((bebida, index) => (
                <li
                  key={index}
                  className={`flex items-center cursor-pointer p-2 rounded-md transition-colors duration-300 ${bebidaSeleccionada === bebida ? 'bg-gray-600' : 'hover:bg-gray-700 hover:outline hover:outline-gray-700'}`}
                  onClick={() => setBebidaSeleccionada(bebida)}
                >
                  <img src={bebida.imagen} alt={bebida.nombre} className="w-8 h-8 mr-2" />
                  {bebida.nombre}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Comentarios a la derecha */}
          <div className="w-3/4 p-8 bg-white text-black rounded-r-lg">
            {platoSeleccionado && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">{platoSeleccionado.nombre}</h2>
                <p>{platoSeleccionado.descripcion}</p>
                <p className="mt-4">Comentario: {platoSeleccionado.comentario}</p>
                <img src={platoSeleccionado.imagen} alt={platoSeleccionado.nombre} className="w-full h-48 object-cover mt-4 rounded-lg" />
              </div>
            )}
            {bebidaSeleccionada && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">{bebidaSeleccionada.nombre}</h2>
                <p>{bebidaSeleccionada.descripcion}</p>
                <p className="mt-4">Comentario: {bebidaSeleccionada.comentario}</p>
                <img src={bebidaSeleccionada.imagen} alt={bebidaSeleccionada.nombre} className="w-full h-48 object-cover mt-4 rounded-lg" />
              </div>
            )}
          </div>
        </div>
  

      {/* Main Content (fondo) */}
      <main className="flex-grow flex justify-center items-center relative m-4 border-y min-h-[20px]">
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

export default Menu;