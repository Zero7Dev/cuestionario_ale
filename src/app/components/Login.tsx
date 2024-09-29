'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí agregarás la lógica para manejar el inicio de sesión
    console.log('Formulario enviado', formData);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://example.com/imagen-de-fondo.jpg')" }} // Usa tu imagen de fondo aquí
    >
      <Head>
        <title>Login para el amor de mi vida</title>
        <meta name="description" content="Login personal para Alejandra" />
      </Head>

      {/* Navbar */}
      <nav className="w-full p-4 bg-gray-900 bg-opacity-75 text-white text-center">
        <h1 className="text-2xl font-bold">Login para el amor de mi vida</h1>
      </nav>

      {/* Formulario de Login */}
      <main className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md mt-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-white-700">Accede a tu cuenta, mi amor</h2>
        <form onSubmit={handleSubmit}>
          
          {/* Campo de Email */}
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Escribe tu correo"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="mb-6">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Escribe tu contraseña"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Botón de Enviar */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
