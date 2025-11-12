// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de las páginas
import Header from './paginas/header';
import Footer from './paginas/footer';
import Hero from './paginas/hero';
import Propuesta from './paginas/propuesta';
import Organigrama from './paginas/organigrama';
import Documentos from './paginas/documentos';
import Historia from './paginas/historia';
import Horarios from './paginas/horarios';
import Login from './paginas/Login';
import Eventos from './paginas/eventos';
import Admin from './paginas/Admin';
import ProtectedRoute from './paginas/ProtectedRoute';
import { AuthProvider } from "./context/AuthProvider";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <Header />
      <Routes>

        {/* --- RUTAS PÚBLICAS --- */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Propuesta />
              <Organigrama />
              <Documentos />
            </>
          }
        />
        <Route path="/historia" element={<Historia />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/login" element={<Login />} />

        {/* --- RUTAS PRIVADAS (sólo usuarios válidos de la tabla `usuarios`) --- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* Otras rutas protegidas opcionales */}
        {/* <Route path="/admin/editar-documentos" element={<ProtectedRoute><EditarDocumentos /></ProtectedRoute>} /> */}
        {/* <Route path="/admin/editar-horarios" element={<ProtectedRoute><EditarHorarios /></ProtectedRoute>} /> */}

        {/* --- RUTA 404 --- */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </AuthProvider>
  </BrowserRouter>
);
