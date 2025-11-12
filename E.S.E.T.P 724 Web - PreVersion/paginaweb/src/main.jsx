// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de las páginas
import Header from './paginas/header';
import Footer from './paginas/footer';
import Hero from './paginas/hero';
import Propuesta from './paginas/propuesta';
import Documentos from './paginas/documentos';
import Historia from './paginas/historia';
import Horarios from './paginas/horarios';
import Login from './paginas/Login';
import Admin from './paginas/Admin';
import ProtectedRoute from './paginas/ProtectedRoute'; // Importamos la ruta protegida

// Contexto de Autenticación
import { AuthProvider } from './context/AuthContext'; // Importamos el proveedor

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider> {/* 1. Envolvemos todo con el AuthProvider */}
      <Header />
      <Routes>
        {/* --- RUTAS PÚBLICAS --- */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Propuesta />
              <Documentos />
            </>
          }
        />
        <Route path="/historia" element={<Historia />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/login" element={<Login />} /> {/* 2. Añadimos la ruta de login */}
        
        {/* --- RUTAS PRIVADAS PARA ADMIN --- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>  {/* 3. Protegemos la ruta de admin */}
              <Admin />
            </ProtectedRoute>
          }
        />
        {/* Aquí irían las otras rutas de edición, también protegidas */}
        {/* <Route path="/admin/editar-documentos" element={<ProtectedRoute><EditarDocumentos /></ProtectedRoute>} />
        <Route path="/admin/editar-horarios" element={<ProtectedRoute><EditarHorarios /></ProtectedRoute>} />
        */}

        {/* --- RUTA NOT FOUND --- */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </AuthProvider>
  </BrowserRouter>
);