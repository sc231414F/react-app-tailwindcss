import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './pages/Contacto'; // Importa tus componentes de página
import Reservas from './pages/Reservas'; // Importa las paginas creadas.
import Menu from './pages/Menu';
import Horario from './pages/Horario';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/horario" element={<Horario />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);