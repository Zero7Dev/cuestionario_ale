'use client'
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase';

export default function LoveMessage() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage('');
    try {
      // Guarda el mensaje en la colección "messages"
      await addDoc(collection(db, 'messages'), {
        text: message,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Error al guardar el mensaje: ", error);
    }
  };


  return (
    <div className="flex flex-col items-center p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
      <h2 className="text-3xl text-white mb-4">Mensaje bonito :)</h2>
      {submitted ? (
        <p className="text-white">¡Gracias por tu mensaje! ❤️</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe aquí mi vida ❤️..."
            
            className="w-full p-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Enviar Mensaje
          </button>
          <p>Si ves esto no le pares bola :C</p>
        </form>
        
      )}
    </div>
  );
}
