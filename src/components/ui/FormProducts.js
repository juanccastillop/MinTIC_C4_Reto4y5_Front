import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import ActualizarProducto from '../Pages/UpdateProduct';

const FormularioProductos = ({ producto }) => {

    const { reference, brand, category, materiales, dimensiones, description, availability, price, quantity, photography } = producto;

    const [productos, guardarProductos] = useState([]);

    fetch("http://144.22.136.162:8080/api/cookware/all")
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
            guardarProductos(data);
        });

    const actualizarProducto = reference => {

        {
            productos.map(producto => (
                <ActualizarProducto
                    key={producto.reference}
                    producto={producto}
                />))
        }
    }

    const borrarProducto = reference => {
        Swal.fire({
            title: 'Estas seguro de borrar el producto?',
            text: "Esta accion no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(reference);
                try {
                    console.log(reference);
                    fetch(`http://144.22.136.162:8080/api/cookware/${reference}`, {
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                    }).then((data) => {
                        console.log(data);
                    });

                    Swal.fire(
                        'Borrado!',
                        'El producto ha sido eliminado!',
                        'success'
                    );
                } catch (error) {
                    console.log(error)
                }
            }
        })
    }

    return (
        <>
            <div className="w-full bg-gray-800 px-3 mb-4">
                <div className="p-5 shadow-md bg-white">
                    <div className="lg:flex">
                        <div className="lg:w-5/12 xl:w-3/12">

                            <img src={photography} alt=" imagen producto " />
                            <div className="sm:flex sm:-mx-2 pl-2">

                            </div>
                        </div>
                        <div className="bg-gray-800 lg:w-7/12 xl:w-9/12 pl-5">

                            <p className="text-gray-600 mb-4 p-1">REF: {''}
                                <span className="font-bold text-1xl text-yellow-600 mb-4"> {reference} </span>
                            </p>
                            <p className="text-gray-600 mb-4">Marca: {''}
                                <span className="font-bold  text-yellow-800 mb-4">{brand} </span>
                            </p>
                            <p className="text-gray-600 mb-4">Categoria: {''}
                                <span className="font-bold text-gray-400 mb-4">{category} </span>
                            </p>
                            <p className="text-gray-600 mb-4">Materiales: {''}
                                <span className="font-bold text-gray-400 mb-4">{materiales} </span>
                            </p>
                            <p className="text-gray-600 mb-4">Dimensiones: {''}
                                <span className="font-bold text-gray-400 mb-4">{dimensiones} </span>
                            </p>
                            <p className="text-gray-600 mb-4">Descripción: {''}
                                <span className="font-bold text-gray-400 mb-4">{description} </span>
                            </p>
                            <p className="text-gray-600 mb-4">Stock: {''}
                                <span className="font-bold text-gray-400 mb-4">{availability} </span>
                            </p>
                            <p className="text-gray-600 mb-4">Precio: {''}
                                <span className="text-gray-400 font-bold">$ {price}</span>
                            </p>
                            <p className="text-gray-600 mb-4">Cantidad: {''}
                                <span className="text-gray-400 font-bold">{quantity} Unidades</span>
                            </p>




                            <button
                                onClick={() => borrarProducto(producto.reference)}
                                type="submit"
                                className="rounded bg-red-900 hover:bg-red-600 text-white  mb-5 p-2 mr-4 font-bold"
                            >Borrar Producto</button>

                            <Link to={`/actualizar-producto/${producto.reference}`} className="rounded bg-green-900 hover:bg-green-500 text-white inline-block mb-5 p-2 font-bold">
                                Actualizar Producto
                            </Link>





                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormularioProductos;