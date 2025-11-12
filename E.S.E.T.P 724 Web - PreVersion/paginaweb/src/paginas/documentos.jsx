import { Link } from "react-router-dom";
import "../styles/styles.css";

const Documentos = () => {
  const documents = [
    { id: 1, title: "Calendario Académico", description: "Calendario académico para el año escolar 2023-2024.", link: "/documents/calendario-academico.pdf", icon: "📅" },
    { id: 2, title: "Formulario de Inscripción", description: "Formulario de inscripción para nuevos estudiantes.", link: "/documents/formulario-inscripcion.pdf", icon: "📝" },
    { id: 3, title: "Políticas Escolares", description: "Políticas y normas de la escuela.", link: "/documents/politicas-escolares.pdf", icon: "📋" },
  ];

  return (
    <div className="documentos">
      <h1 className="documents-title">Documentos</h1>
      <div className="documents-grid">
        {documents.map((doc) => (
          <a href={doc.link} className="documento-item" key={doc.id} target="_blank" rel="noopener noreferrer">
            <div className="document-icon">{doc.icon}</div>
            <div>
              <h4>{doc.title}</h4>
              <p>{doc.description}</p>
            </div>
            <i className="fa fa-download"></i>
          </a>
        ))}
      </div>
      <div className="documents-button-container">
        <button className="btn-horarios">
          <Link to="/horarios" className="horarios-link">
            Ver Horarios de Cursos
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Documentos;
