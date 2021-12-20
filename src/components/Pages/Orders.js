import React from 'react';
import { Link } from 'react-router-dom';

const Ordenes = () => {
       return( 
        <>
         <h1 className="text-3xl font-light mb-4">Ordenes</h1>
         <Link to="/nueva-orden" className="content-center rounded bg-blue-600 hover:bg-blue-700, inline-block mb-5 p-2 text-white font-bold">
         Agregar Orden
         </Link>
        </>
     );
}
 
export default Ordenes;
