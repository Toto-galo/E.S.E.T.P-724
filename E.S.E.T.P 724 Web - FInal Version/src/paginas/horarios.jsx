import React, { useState } from 'react';
import "../styles/styles.css";
import { cursos } from '../data/cursosData'; // ¡Importamos los datos!

const Horarios = () => {
  const [activeKey, setActiveKey] = useState(null);

  // El arreglo 'cursos' ya no se define aquí.

  // La lógica para agrupar los cursos no cambia
  const agrupados = {};
  cursos.forEach(curso => {
    if (!agrupados[curso.ciclo]) agrupados[curso.ciclo] = {};
    if (curso.ciclo === "Ciclo Básico") {
      if (!agrupados[curso.ciclo][curso.turno]) agrupados[curso.ciclo][curso.turno] = [];
      agrupados[curso.ciclo][curso.turno].push(curso);
    } else {
      if (!agrupados[curso.ciclo][curso.especialidad]) agrupados[curso.ciclo][curso.especialidad] = [];
      agrupados[curso.ciclo][curso.especialidad].push(curso);
    }
  });

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="horarios-container">
      <h1>Horarios Académicos</h1>

      {Object.entries(agrupados).map(([ciclo, subgrupos]) => (
        <div key={ciclo} className="horarios-section">
          <h2>{ciclo}</h2>
          <div className="accordion-container">
            {Object.entries(subgrupos).map(([subgrupo, cursosDelSubgrupo]) => {
              const uniqueKey = `${ciclo}-${subgrupo}`;
              const isOpen = activeKey === uniqueKey;

              return (
                <div key={uniqueKey} className="accordion-item">
                  <button
                    className={`accordion-button ${isOpen ? 'active' : ''}`}
                    onClick={() => handleToggle(uniqueKey)}
                  >
                    {subgrupo}
                    <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  
                  <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                    <div className="horarios-grid">
                      {cursosDelSubgrupo.map(curso => (
                        <div key={curso.id} className="horario-card">
                          <h5>{curso.año}</h5>
                          <a href={curso.link} download className="download-link">
                            Descargar Horario
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Horarios;