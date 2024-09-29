'use client';
import { useState, useEffect } from 'react';
import { db } from '../firebase'; // Ajusta la ruta según donde hayas guardado firebase.js
import { collection, addDoc } from 'firebase/firestore';

export default function LoveMessage() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Indica que el componente se está renderizando en el cliente
  }, []);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (isClient && db) { // Verifica que estamos en el cliente y db está inicializado
      try {
        await addDoc(collection(db, 'messages'), {
          text: message,
          createdAt: new Date(),
        });
        setSubmitted(true);
        setMessage('');
      } catch (error) {
        console.error("Error al guardar el mensaje: ", error);
      }
    } else {
      console.error("Firestore no está disponible.");
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
      <h2 className="text-3xl text-white mb-4">Déjame un mensaje bonito mi amor ❤️</h2>
      {submitted ? (
        <p className="text-white">¡Gracias por tu mensaje! ❤️</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe aquí tu mensaje..."
            className="w-full text-black p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Enviar Mensaje
          </button>
          <p>Si ves esto aunq no creo, no le pares bola :c</p>
        </form>
      )}
    </div>
  );
}
