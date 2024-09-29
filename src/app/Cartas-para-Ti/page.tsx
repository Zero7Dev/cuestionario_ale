'use client'
import React, { useEffect } from 'react'

const CartaParaTi = () => {
  useEffect(() => {
    // Lanza un error para redirigir a la página de error
    const error = new Error("Algo salió mal en CancionesPage");
    throw error;
  }, []);
  return (
    <div className='text-white font-bold'>loading... 

    </div>  )
}

export default CartaParaTi