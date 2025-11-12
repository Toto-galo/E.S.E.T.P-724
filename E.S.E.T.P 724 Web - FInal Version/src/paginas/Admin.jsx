// src/paginas/Admin.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../data/supabaseClient";
import "../styles/styles.css";

const Admin = () => {
  const [eventos, setEventos] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    titulo: "",
    descripcion: "",
    fecha_evento: "",
    tipo: "",
    lugar: "",
    imagen: null,
  });
  const [isEditing, setIsEditing] = useState(false);

  // Cargar eventos al inicio
  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    const { data, error } = await supabase
      .from("eventos")
      .select("*")
      .order("fecha_evento", { ascending: false });

    if (error) console.error("Error cargando eventos:", error);
    else setEventos(data);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imagenUrl = formData.imagen_url || null;

    // Subida de imagen si existe
    if (formData.imagen && formData.imagen instanceof File) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("eventos")
        .upload(`imagenes/${Date.now()}_${formData.imagen.name}`, formData.imagen, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Error al subir imagen:", uploadError);
        return;
      }

      const { data: publicUrl } = supabase.storage
        .from("eventos")
        .getPublicUrl(uploadData.path);

      imagenUrl = publicUrl.publicUrl;
    }

    // Si estamos editando, actualizamos
    if (isEditing) {
      const { error } = await supabase
        .from("eventos")
        .update({
          titulo: formData.titulo,
          descripcion: formData.descripcion,
          fecha_evento: formData.fecha_evento,
          tipo: formData.tipo,
          lugar: formData.lugar,
          imagen_url: imagenUrl,
        })
        .eq("id", formData.id);

      if (error) console.error("Error actualizando evento:", error);
      else {
        fetchEventos();
        resetForm();
      }
    } else {
      // Caso contrario, insertamos
      const { error } = await supabase.from("eventos").insert([
        {
          titulo: formData.titulo,
          descripcion: formData.descripcion,
          fecha_evento: formData.fecha_evento,
          tipo: formData.tipo,
          lugar: formData.lugar,
          imagen_url: imagenUrl,
        },
      ]);

      if (error) console.error("Error insertando evento:", error);
      else {
        fetchEventos();
        resetForm();
      }
    }
  };

  const handleEdit = (evento) => {
    setFormData({
      id: evento.id,
      titulo: evento.titulo,
      descripcion: evento.descripcion,
      fecha_evento: evento.fecha_evento,
      tipo: evento.tipo,
      lugar: evento.lugar,
      imagen: null,
      imagen_url: evento.imagen_url,
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que querés eliminar este evento?")) return;

    const { error } = await supabase.from("eventos").delete().eq("id", id);
    if (error) console.error("Error al eliminar evento:", error);
    else fetchEventos();
  };

  const resetForm = () => {
    setFormData({
      id: null,
      titulo: "",
      descripcion: "",
      fecha_evento: "",
      tipo: "",
      lugar: "",
      imagen: null,
      imagen_url: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="admin-panel">
      <h2>Panel de Control</h2>

      <form className="evento-form" onSubmit={handleSubmit}>
        <h3>{isEditing ? "Editar Evento" : "Nuevo Evento"}</h3>

        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
        ></textarea>
        <input
          type="date"
          name="fecha_evento"
          value={formData.fecha_evento}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tipo"
          placeholder="Tipo de evento (Olimpiadas, Feria, etc.)"
          value={formData.tipo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lugar"
          placeholder="Lugar"
          value={formData.lugar}
          onChange={handleChange}
        />
        <input type="file" name="imagen" accept="image/*" onChange={handleChange} />

        <button type="submit" className="btn-guardar">
          {isEditing ? "Actualizar" : "Guardar"}
        </button>
        {isEditing && (
          <button type="button" className="btn-cancelar" onClick={resetForm}>
            Cancelar
          </button>
        )}
      </form>

      <div className="eventos-lista">
        <h3>Eventos Guardados</h3>
        <div className="eventos-grid">
          {eventos.map((ev) => (
            <div key={ev.id} className="evento-card">
              {ev.imagen_url && <img src={ev.imagen_url} alt={ev.titulo} />}
              <h4>{ev.titulo}</h4>
              <p>{ev.descripcion}</p>
              <p><strong>Fecha:</strong> {new Date(ev.fecha_evento).toLocaleDateString()}</p>
              <p><strong>Tipo:</strong> {ev.tipo}</p>
              <p><strong>Lugar:</strong> {ev.lugar}</p>

              <div className="botones-card">
                <button onClick={() => handleEdit(ev)} className="btn-editar">Editar</button>
                <button onClick={() => handleDelete(ev.id)} className="btn-eliminar">Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
