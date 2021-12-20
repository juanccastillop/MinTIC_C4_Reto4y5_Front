import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FormularioProductos from '../ui/FormProducts';


const Productos = () => {
    const [ productos, guardarProductos] = useState([]);

    fetch("http://144.22.136.162:8080/api/cookware/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarProductos(data);
    });
       return( 
        <>
         <h1 className="text-3xl font-bold uppercase mb-4 text-center">Utencilios de cocina</h1>
            <Link to="/nuevo-producto" className="content-center rounded bg-blue-600 hover:bg-blue-700, inline-block mb-5 p-2 text-white font-bold">
                Agregar Producto
            </Link>
            {productos.map( producto =>(
                <FormularioProductos 
                key={producto.reference}
                producto={producto}
                />
                

            ))}
        </>
     );
}
 
export default Productos;
