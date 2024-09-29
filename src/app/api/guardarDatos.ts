// guardarDatos.ts
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../firebase"; // Ajusta la ruta según donde hayas guardado firebase.js
import { collection, addDoc } from 'firebase/firestore';

export default async function guardarDatos(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (!db) {
      return res.status(500).json({ error: "Firestore no está disponible." });
    }

    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        createdAt: new Date(),
      });
      return res.status(200).json({ message: "Mensaje guardado con éxito." });
    } catch (error) {
      console.error("Error al guardar el mensaje: ", error);
      return res.status(500).json({ error: "Error al guardar el mensaje." });
    }
  }

  return res.status(405).json({ error: "Método no permitido." });
}
