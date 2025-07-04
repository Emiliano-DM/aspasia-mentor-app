import React, { useState } from 'react';
import { db } from '../../services/db';
import './Grupos.css';

function GruposMentores() {
  const [modo, setModo] = useState('');
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [seleccion, setSeleccion] = useState({});
  const [error, setError] = useState('');
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const handleSelect = (itemId, valor) => {
    setSeleccion((prev) => ({
      ...prev,
      [itemId]: valor,
    }));
    setError('');
  };

  const handleSubmit = () => {
    const preferencias = Object.values(seleccion).filter(Boolean);
    const duplicados = preferencias.filter((item, i) => preferencias.indexOf(item) !== i);
    if (duplicados.length > 0) {
      setError('No puedes repetir la misma preferencia.');
      return;
    }
    setMostrarPopup(true)
  };

  const confirmarEnvio = () => {
  console.log('Usuario:', usuarioSeleccionado);
  console.log('Resultado:', seleccion);
  alert('Enviado correctamente');
  setMostrarPopup(false);
};



  const renderSeleccionUsuario = () => {
    const lista = modo === 'mentor' ? db.Mentores : db.Equipos;

    return (
      <div className="grupos-container">
        <h2> ¿Quién soy? </h2>
        {lista.map((item) => (
          <div key={item.id} className="grupo-card" onClick={() => setUsuarioSeleccionado(item)}>
            <h3>{item.nombre}</h3>
            {modo === 'mentor' && <p>{item.empresa}</p>}
            {modo === 'grupo' && <p>{item.descripcion}</p>}
          </div>
        ))}
      </div>
    );
  };

  const renderGruposParaMentor = () => (
    <div className="grupos-container">
      <h2>Hola {usuarioSeleccionado.nombre}, elige los grupos que prefieres mentorizar</h2>
      {db.Equipos.map((equipo) => (
        <div key={equipo.id} className="grupo-card">
          <h3>{equipo.nombre}</h3>
          <p>{equipo.descripcion}</p>
          <label>
            Preferencia:
            <select
              value={seleccion[equipo.id] || ''}
              onChange={(e) => handleSelect(equipo.id, e.target.value)}
            >
              <option value="">Elegir</option>
              <option value="1">1°</option>
              <option value="2">2°</option>
              <option value="3">3°</option>
            </select>
          </label>
        </div>
      ))}
    </div>
  );

  const renderMentoresParaGrupo = () => (
    <div className="grupos-container">
      <h2>Hola {usuarioSeleccionado.nombre}, vota a tus mentores preferidos</h2>
      {db.Mentores.map((mentor) => (
        <div key={mentor.id} className="grupo-card">
          <div className="grupo-foto">
            <img
              src={mentor.foto}
              alt={mentor.nombre}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
          <h3>{mentor.nombre}</h3>
          <p>{mentor.empresa}</p>
          <label>
            Preferencia:
            <select
              value={seleccion[mentor.id] || ''}
              onChange={(e) => handleSelect(mentor.id, e.target.value)}
            >
              <option value="">Elegir</option>
              <option value="1">1°</option>
              <option value="2">2°</option>
              <option value="3">3°</option>
            </select>
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="grupos-container">
      {!modo && (
        <>
          <h1>¿Eres mentor o grupo?</h1>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <button onClick={() => setModo('mentor')}>Mentor</button>
            <button onClick={() => setModo('grupo')}>Grupo</button>
          </div>
        </>
      )}

      {modo && !usuarioSeleccionado && renderSeleccionUsuario()}

      {modo === 'mentor' && usuarioSeleccionado && renderGruposParaMentor()}
      {modo === 'grupo' && usuarioSeleccionado && renderMentoresParaGrupo()}

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {usuarioSeleccionado && (
        <div className="enviar-boton-container">
          <button className="enviar-boton" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      )}

      {mostrarPopup && (
        <div className="popup-overlay">
          <div className="popup-contenido">
            <h3>Resumen de tus preferencias</h3>
            <div>
              {Object.entries(seleccion).map(([id, valor]) => {
                const item = modo === 'mentor'
                  ? db.Equipos.find((g) => g.id === id)
                  : db.Mentores.find((m) => m.id === id);
                return (
                  <p key={id}>
                    {valor}° - {item ? item.nombre : 'Elemento no encontrado'}
                  </p>
                );
              })}
            </div>
            <div className="popup-botones">
              <button onClick={() => setMostrarPopup(false)}>Cancelar</button>
              <button onClick={confirmarEnvio}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GruposMentores;
