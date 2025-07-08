import React from 'react'
import { useState } from 'react';
import { db } from '../services/db';

function Group() {
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

    if (error) setError('');
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

  // const confirmarEnvio = () => {
  //   console.log('Usuario:', usuarioSeleccionado);
  //   console.log('Resultado:', seleccion);
  //   setMostrarPopup(false);
  //   alert('Enviado correctamente');
  // };

  const confirmarEnvio = async () => {
    const preferenciasOrdenadas = seleccion
      .filter((s) => s.valor > 0)
      .sort((a, b) => a.valor - b.valor)
      .map((s) => s.id); // IDs ordenados según preferencia

    try {
      const response = await fetch(`https://idea-de-txabi.onrender.com/api/equipos/${usuarioSeleccionado.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preferenciasOrdenadas),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la votación');
      }

      const data = await response.json();
      console.log('Respuesta del backend:', data);

      setMostrarPopup(false);
      alert('Votación enviada con éxito');
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar la votación');
    }
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

  if (!usuarioSeleccionado) {
    return (
      <div className="grupos-container">
        <h2 className="titulo-grupo">Soy grupo</h2>
        <p className="subtexto-rol">Selecciona tu equipo para continuar</p>
        {db.equipos.map((equipo) => (
          <div
            key={equipo.id}
            className={`grupo-card card-grupo ${usuarioSeleccionado?.id === equipo.id ? 'seleccionado' : ''}`}
            onClick={() => setUsuarioSeleccionado(equipo)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}
          >
            <h3>{equipo.nombre}</h3>
            <p>{equipo.descripcion}</p>
          </div>
        ))}
      </div>
    );
  }

  // Ya seleccionado grupo => votar mentores
  return (
    <div className="grupos-container">
      <h2 className="titulo-amarillo">¡A votar!</h2>
      <p className="subtexto-rol">
        Selecciona 3 mentores y asignales un número del 1 al 3 según tus preferencias en los recuadros. ¡Tú eliges el orden!
      </p>
      {db.mentores.map((mentor) => (
        <div key={mentor.id} className="grupo-card card-grupo" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="grupo-foto">
            <img src={mentor.foto} alt={mentor.nombre} style={{ width: '100px', borderRadius: '50%' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
            <h3>{mentor.nombre}</h3>
            <p>{mentor.empresa}</p>
          </div>
          <label>{renderInput(mentor.id)}</label>
        </div>
      ))}

      {error && <div style={{ color: 'red' }}>{error}</div>}

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
                  const item = db.mentores.find((m) => m.id === id);
                  return (
                    <p key={id}>
                      {valor}° - {item ? item.nombre : 'Elemento no encontrado'}
                    </p>
                  );
                })}
            </div>
            <div className="popup-botones">
              <button className="btn-cancelar" onClick={() => setMostrarPopup(false)}>Cancelar</button>
              <button className="boton-amarillo" onClick={confirmarEnvio}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Group
