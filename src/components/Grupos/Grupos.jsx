import React, { useState } from 'react';
import { db } from '../../services/db';
import './Grupos.css';

function GruposMentores() {
  const [modo, setModo] = useState('');
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [seleccion, setSeleccion] = useState([]);
  const [error, setError] = useState('');
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const handleSelect = (itemId, valor) => {
    const numero = parseInt(valor);
    if (isNaN(numero) || numero < 0 || numero > 3) return;

    setSeleccion((prev) => {
      const sinActual = prev.filter((item) => item.id !== itemId);
      if (numero === 0) return sinActual;
      return [...sinActual, { id: itemId, valor: numero }];
    });

    setError('');
  };

  const handleSubmit = () => {
    const preferencias = seleccion.map((item) => item.valor);
    const duplicados = preferencias.filter((item, i) => preferencias.indexOf(item) !== i);
    if (duplicados.length > 0) {
      setError('No puedes repetir la misma preferencia.');
      return;
    }
    setMostrarPopup(true);
  };

  const confirmarEnvio = () => {
    console.log('Usuario:', usuarioSeleccionado);
    console.log('Resultado:', seleccion);
    setMostrarPopup(false);
    alert('Enviado correctamente');
  };

  const getValorSeleccionado = (id) => {
    const item = seleccion.find((i) => i.id === id);
    return item?.valor || 0;
  };

  const yaHayTres = seleccion.length >= 3;

  const renderInput = (id) => {
    const valorActual = getValorSeleccionado(id);
    const estaSeleccionado = valorActual !== 0;
    const deshabilitar = !estaSeleccionado && yaHayTres;

    return (
      <input
        type="number"
        min="0"
        max="3"
        value={valorActual}
        disabled={deshabilitar}
        onChange={(e) => handleSelect(id, e.target.value)}
      />
    );
  };

  const renderGruposParaMentor = () => (
    <div className="grupos-container">
      <h2 className={modo === 'grupo' ? 'titulo-azul' : 'titulo-amarillo'}>
        ¡A votar!
      </h2>
      <p className="subtexto-rol">
        {modo === 'grupo'
          ? 'Selecciona 3 mentores y asignales un número del 1 al 3 según tus preferencias en los recuadros. ¡Tú eliges el orden!'
          : 'Selecciona 3 grupos y asignales un número del 1 al 3 según tus preferencias en los recuadros. ¡Tú eliges el orden!'}
      </p>
      {db.equipos.map((equipo) => (
        <div key={equipo.id} className={`grupo-card card-mentor`}>
          <h3>{equipo.nombre}</h3>
          <p>{equipo.descripcion}</p>
          <label>{renderInput(equipo.id)}</label>
        </div>
      ))}
    </div>
  );

  const renderMentoresParaGrupo = () => (
    <div className="grupos-container">
      <h2 className={modo === 'mentor' ? 'titulo-azul' : 'titulo-amarillo'}>
        ¡A votar!
      </h2>
      <p className="subtexto-rol">
        {modo === 'mentor'
          ? 'Selecciona 3 grupos y asignales un número del 1 al 3 según tus preferencias en los recuadros. ¡Tú eliges el orden!'
          : 'Selecciona 3 mentores y asignales un número del 1 al 3 según tus preferencias en los recuadros. ¡Tú eliges el orden!'}
      </p>
      {db.mentores.map((mentor) => (
        <div key={mentor.id} className={`grupo-card card-grupo`}>
          <div className="grupo-foto">
            <img src={mentor.foto} alt={mentor.nombre} />
          </div>
          <h3>{mentor.nombre}</h3>
          <p>{mentor.empresa}</p>
          <label>{renderInput(mentor.id)}</label>
        </div>
      ))}
    </div>
  );

  const renderSeleccionUsuario = () => {
    const lista = modo === 'mentor' ? db.mentores : db.equipos;

    return (
      <div className="grupos-container">
        <h2 className={modo === 'mentor' ? 'titulo-mentor' : 'titulo-grupo'}>
          {modo === 'mentor' ? 'Soy mentor' : 'Soy grupo'}
        </h2>
        <p className="subtexto-rol">
          {modo === 'mentor'
            ? 'Elige tu nombre en la lista'
            : 'Selecciona tu equipo para continuar'}
        </p>

        {lista.map((item) => (
          <div
            key={item.id}
            className={`grupo-card 
              ${modo === 'mentor' ? 'card-mentor' : 'card-grupo'} 
              ${usuarioSeleccionado?.id === item.id ? 'seleccionado' : ''}`}
            onClick={() => setUsuarioSeleccionado(item)}
          >
            {modo === 'mentor' && item.foto && (
              <div className="grupo-foto">
                <img src={item.foto} alt={item.nombre} />
              </div>
            )}
            <h3>{item.nombre}</h3>
            {modo === 'mentor' && <p>{item.empresa}</p>}
            {modo === 'grupo' && <p>{item.descripcion}</p>}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="grupos-container">
      {!modo && (
        <div className='inicio-pagina'>
          <h1 className='azul'>¡Bienvenido!</h1>
          <p>Antes de empezar, dinos quién eres</p>
          <div className='botones-vertical'>
            <button className='boton-azul' onClick={() => setModo('mentor')}>Mentor</button>
            <button className='boton-amarillo' onClick={() => setModo('grupo')}>Grupo</button>
          </div>
        </div>
      )}

      {modo && !usuarioSeleccionado && renderSeleccionUsuario()}
      {modo === 'mentor' && usuarioSeleccionado && renderGruposParaMentor()}
      {modo === 'grupo' && usuarioSeleccionado && renderMentoresParaGrupo()}

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {usuarioSeleccionado && (
        <div className="enviar-boton-container">
          <button
            className="enviar-boton"
            onClick={handleSubmit}
            disabled={
              seleccion.length < 3 ||
              seleccion.some((s) => s.valor === 0) ||
              new Set(seleccion.map((s) => s.valor)).size < 3
            }
          >
            Siguiente
          </button>
        </div>
      )}

      {mostrarPopup && (
        <div className="popup-overlay">
          <div className="popup-contenido">
            <h3>¡Ya casi, ya casi!</h3>
            <p>Estos son tus elegidos, de más favoritos a menos:</p>
            <div>
              {seleccion
                .filter((s) => s.valor > 0)
                .sort((a, b) => a.valor - b.valor)
                .map(({ id, valor }) => {
                  const item = modo === 'mentor'
                    ? db.equipos.find((g) => g.id === id)
                    : db.mentores.find((m) => m.id === id);
                  return (
                    <p key={id}>
                      {valor}° - {item ? item.nombre : 'Elemento no encontrado'}
                    </p>
                  );
                })}
            </div>
            <div className="popup-botones">
              <button className='btn-cancelar' onClick={() => setMostrarPopup(false)}>Cancelar</button>
              <button className='boton-azul' onClick={confirmarEnvio}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GruposMentores;

