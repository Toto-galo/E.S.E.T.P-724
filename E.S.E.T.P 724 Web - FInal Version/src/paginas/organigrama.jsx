import React from "react";
import "../styles/styles.css";

const Organigrama = () => {
  return (
    <section className="organigrama">
      <div className="organigrama-container">
        <h2>Equipo Directivo</h2>
        <div className="decorative-line"></div>

        <div className="organigrama-tree">
          {/* Nivel principal */}
          <div className="nivel nivel-principal">
            <div className="persona">Directora Titular <br></br> Silvetti Napoli Carla</div>
          </div>

          {/* Conector vertical desde el principal hacia la línea horizontal */}
          <div className="conector-vertical from-top"></div>

          {/* Línea horizontal central que une al nivel secundario */}
          <div className="hline" aria-hidden="true"></div>

          {/* Nivel secundario */}
          <div className="nivel nivel-secundario">
            <div className="persona">Vicedirectora - Turno Mañana - <br></br>Coraza Malvina</div>
            <div className="persona">Vicedirectora Titular - Turno Tarde - <br></br>Donini Romina </div>
            <div className="persona">Vicedirectora - Turno Vespertino - <br></br>Lucero Figueroa Silvina</div>
          </div>

          {/* Conector vertical entre secundarios e inferior */}
          <div className="conector-vertical"></div>

          {/* Línea horizontal para nivel inferior */}
          <div className="hline" aria-hidden="true"></div>

          {/* Nivel inferior */}
          <div className="nivel nivel-inferior">
            <div className="persona">JGEP Titular <br></br> Kruse Ivana</div>
            <div className="persona">Secretaria <br></br> Perez Joana</div>
            <div className="persona">Departamento de Alumnos <br></br> Toledo Fernanda</div>
            <div className="persona">Departamento Docente <br></br> Cajal Natalia</div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organigrama;
