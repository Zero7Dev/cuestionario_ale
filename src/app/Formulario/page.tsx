'use client'
import Head from 'next/head';
import { useState } from 'react';
import { db } from '../firebase';  // Asegúrate de importar db
import { collection, addDoc } from 'firebase/firestore';
import Image from 'next/image';
import ConfirmationModal from '../components/ConfirmationModal';


export default function Home() {
  
  const [formData, setFormData] = useState({
    nombre: '',
    cumpleaños: '',
    porqueNoUni: '',
    loQueMeGusta: '',
    musicaFavorita: '',
    comidaFavorita: '',
    peliculaFavorita: '',
    hobbies: '',
    love: 50,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar el modal

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     // Envía los datos a Firestore
  //     await addDoc(collection(db, 'respuestas_ale'), formData);
  //     console.log('Documento enviado correctamente');
  //     // Puedes limpiar el formulario aquí si deseas
  //     setFormData({
  //       nombre: '',
  //       cumpleaños: '',
  //       porqueNoUni: '',
  //       loQueMeGusta: '',
  //       musicaFavorita: '',
  //       comidaFavorita: '',
  //       peliculaFavorita: '',
  //       hobbies: '',
  //       love: 50,
  //     });
  //   } catch (error) {
  //     console.error('Error al agregar el documento: ', error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Envía los datos a la API Route
      const response = await fetch('/api/guardarDatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Documento enviado correctamente');
        // Limpiar el formulario si es necesario
        setFormData({
          nombre: '',
          cumpleaños: '',
          porqueNoUni: '',
          loQueMeGusta: '',
          musicaFavorita: '',
          comidaFavorita: '',
          peliculaFavorita: '',
          hobbies: '',
          love: 50,
        });
      } else {
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };
  
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover"
      style={{ backgroundImage: "url('https://example.com/imagen-de-fondo.jpg')" }}
    >
      <Head>
        <title>Formulario para el amor de mi vida</title>
        <meta name="description" content="Formulario personal para Alejandra" />
      </Head>

      {/* Navbar */}
      <nav className="w-full p-4 bg-gray-900 bg-opacity-75 text-white text-center">
        <h1 className="text-2xl font-bold">Formulario para el amor de mi vida</h1>
      </nav>
      <div className="flex justify-center mt-8">
      <div className="border-4 border-blue-500 rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/images/imagen2.png" // Ruta de la imagen
          alt="Descripción de la imagen"
          width={500} // Ancho deseado
          height={300} // Altura deseada
          priority // Cargar la imagen con prioridad
        />
      </div>
    </div>
      {/* Formulario */}
      <main className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md mt-8">
        <h2 className="text-2xl font-bold text-center mb-6">NO SE VALE HACER TRAMPA</h2>
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario */}
          
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="nombre">
              Cual es mi Nombre completo, mi amor?
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Mi nombre xdd"
              value={formData.nombre}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="cumpleaños">
              Fecha en que te diste cuenta que yo te gustaba
            </label>
            <input
              type="date"
              id="cumpleaños"
              name="cumpleaños"
              value={formData.cumpleaños}
              onChange={handleChange}
              className="shadow  border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="porqueNoUni">
              ¿Por qué no me gusta la universidad, mi amor?
            </label>
            <input
              type="text"
              id="porqueNoUni"
              name="porqueNoUni"
              placeholder="Porque xd"
              value={formData.porqueNoUni}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="loQueMeGusta">
              ¿Qué es lo que más me gusta?
            </label>
            <input
              type="text"
              id="loQueMeGusta"
              name="loQueMeGusta"
              placeholder="Lo que más me gusta, mi amor"
              value={formData.loQueMeGusta}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="musicaFavorita">
              ¿Cuál es mi música favorita?
            </label>
            <input
              type="text"
              id="musicaFavorita"
              name="musicaFavorita"
              placeholder="Música favorita, mi amor"
              value={formData.musicaFavorita}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="comidaFavorita">
              ¿Cuál es mi comida favorita?
            </label>
            <input
              type="text"
              id="comidaFavorita"
              name="comidaFavorita"
              placeholder="Mi comida favorita"
              value={formData.comidaFavorita}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="peliculaFavorita">
              ¿Cuál es mi película favorita?
            </label>
            <input
              type="text"
              id="peliculaFavorita"
              name="peliculaFavorita"
              placeholder="Mi película favorita"
              value={formData.peliculaFavorita}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="hobbies">
              ¿Qué me gusta hacer en mi tiempo libre?
            </label>
            <input
              type="text"
              id="hobbies"
              name="hobbies"
              placeholder="Tus pasatiempos"
              value={formData.hobbies}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Control deslizante (Slider) */}
          <div className="mb-6">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="love">
              ¿Cuánto me amas?
            </label>
            <input
              type="range"
              id="love"
              name="love"
              min="0"
              max="100"
              value={formData.love}
              onChange={(e) => setFormData({ ...formData, love: parseInt(e.target.value, 10) })}
              className="w-full"
            />
            <p className="text-center text-white-700 mt-2">{formData.love}%</p>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
      <ConfirmationModal isOpen={false} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
