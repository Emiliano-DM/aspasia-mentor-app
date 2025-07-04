import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <h1>Bienvenido a la Página Principal</h1>
      <div className="button-container">
        <Button
          text="Soy Mentor"
          onClick={() => handleNavigation('/mentor')}
          className="mentor-button"
        />
        <Button
          text="Soy Grupo"
          onClick={() => handleNavigation('/group')}
          className="group-button"
        />
      </div>
    </div>
  );
}

export default Home;
