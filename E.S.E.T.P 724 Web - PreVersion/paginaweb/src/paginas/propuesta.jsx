import React from "react";
import "../styles/styles.css";

const Propuesta = () => {
  return (
    <section className="propuesta">
      <div className="propuesta-container">
        <h2>Nuestra Propuesta Educativa</h2>
        <div className="decorative-line"></div>
        <p>
          En la E.S.E.T.P Nº724 ofrecemos una formación técnico profesional orientada al desarrollo integral de nuestros estudiantes. 
          Nuestro objetivo es brindar herramientas y conocimientos que les permitan insertarse en el mundo laboral y continuar estudios superiores.
        </p>
        <ul>
          <li>Formación técnica en áreas clave de la industria y tecnología.</li>
          <li>Desarrollo de habilidades blandas y trabajo en equipo.</li>
          <li>Prácticas profesionalizantes y vinculación con empresas locales.</li>
          <li>Proyectos interdisciplinarios y actividades extracurriculares.</li>
        </ul>
      </div>
    </section>
  );
};

export default Propuesta;