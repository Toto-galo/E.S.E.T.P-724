// src/components/Historia.jsx
import React from "react";
import "../styles/styles.css";
import { timelineData } from '../data/historiaData'; // 1. ¡Importa los datos!

// 2. Ya no se define el arreglo 'timelineData' aquí.

const Historia = () => {
  return (
    <section className="historia">
      <div className="historia-container">
        <div className="historia-header">
          <h2>Nuestra Historia</h2>
          <div className="decorative-line"></div>
          <p className="historia-intro">
            En la década del 80, la explosión demográfica en Trelew hizo necesaria la creación de nuevos colegios. Así nació nuestra institución, forjada con el esfuerzo de la comunidad para brindar educación y un futuro a miles de jóvenes.
          </p>
        </div>

        <div className="timeline-container">
          {/* El resto del código funciona igual */}
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Historia;