import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../data/supabaseClient";
import { AuthContext } from "../context/AuthContext";
import "../styles/styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data, error } = await supabase
        .from("usuarios")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .eq("activo", true)
        .single();

      if (error || !data) {
        setError("Usuario o contraseña incorrectos");
        return;
      }

      login(data);           // guarda el usuario en contexto y localStorage
      navigate("/admin");    // redirige al panel admin
    } catch (err) {
      console.error(err);
      setError("Error al iniciar sesión");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Ingresar</button>
        </form>
        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
