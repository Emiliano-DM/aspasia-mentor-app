import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/Grupos.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="inicio-pagina">
      <h1 className="azul">¡Bienvenido!</h1>
      <p>Antes de empezar, dinos quién eres</p>
      <div className="botones-vertical">
        <Button
          text="Mentor"
          onClick={() => handleNavigation('/mentor')}
          className="boton-azul"
        />
        <Button
          text="Grupo"
          onClick={() => handleNavigation('/group')}
          className="boton-amarillo"
        />
      </div>
      <Link to="/result">.asdvasd</Link>

    </div>
  );
};

export default Home;

