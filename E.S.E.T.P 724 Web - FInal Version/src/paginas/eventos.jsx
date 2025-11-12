import React, { useEffect, useState } from "react";
import { supabase } from "../data/supabaseClient";
import "../styles/styles.css";

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const { data, error } = await supabase
          .from("eventos")
          .select("*")
          .order("fecha_evento", { ascending: false }); // los más recientes primero
        if (error) throw error;
        setEventos(data);
      } catch (error) {
        console.error("Error al obtener eventos:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventos();
  }, []);

  if (loading) return <p className="eventos-loading">Cargando eventos...</p>;

  return (
    <section className="eventos">
      <div className="eventos-container">
        <h2>Eventos y Actividades</h2>
        <div className="decorative-line"></div>

        {eventos.length === 0 ? (
          <p>No hay eventos registrados.</p>
        ) : (
          <div className="eventos-grid">
            {eventos.map((evento) => (
              <div key={evento.id} className="evento-card">
                {evento.imagen_url && (
                  <img
                    src={evento.imagen_url}
                    alt={evento.titulo}
                    className="evento-img"
                  />
                )}
                <div className="evento-content">
                  <h3>{evento.titulo}</h3>
                  <p className="evento-fecha">
                    {new Date(evento.fecha_evento).toLocaleDateString("es-AR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="evento-tipo">
                    <strong>Tipo:</strong> {evento.tipo}
                  </p>
                  {evento.lugar && (
                    <p className="evento-lugar">
                      <strong>Lugar:</strong> {evento.lugar}
                    </p>
                  )}
                  <p>{evento.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Eventos;
