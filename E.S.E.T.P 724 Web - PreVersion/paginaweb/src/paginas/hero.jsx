// src/components/Hero.jsx
import Prensa from "../assets/Logo-tenicaturas-724.svg";
import React from "react";
import "../styles/styles.css";
import Escuela from"../assets/61416.jpg"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Escuela Secundaria de Educación <br />
          <span>Técnico Profesional</span>
        </h1>
        <h2>E.S.E.T.P Nº724</h2>
      </div>
      <div className="hero-logo">
        <img src={Escuela} alt="Logo detallado de la escuela" />
      </div>
    </section>
  );
};

export default Hero;
