import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import Contacto from './pages/Contacto';
import Reservas from './pages/Reservas';
import Menu from './pages/Menu';
import Horario from './pages/Horario';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/horario" element={<Horario />} />
      </Routes>
    </div>
  );
}

export default App;