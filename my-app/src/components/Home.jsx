import React from 'react'
import { User } from './User';

const Home = () => {
    return (
        <div className="container mt-2 text-center">
            <h2>   Bienvenido a la Página Principal </h2>
            <h1> C R U D -  D E - U S U A R I O S  (EN REACT)</h1>
            <h3>Página de Inicio</h3>
            <User/>
        </div>
    )
}

export default Home;