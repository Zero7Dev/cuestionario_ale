// pages/api/guardarDatos.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../firebase'; // Asegúrate de que tu archivo de Firebase esté correctamente configurado
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const data = req.body; // Los datos que se envían desde el frontend
      // Guardar en Firestore
      await addDoc(collection(db, 'respuestas_ale'), data);

      res.status(200).json({ message: 'Datos guardados exitosamente' });
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      res.status(500).json({ error: 'Error al guardar los datos' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
