import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';


const AgregarProducto = () => {

    // Hook para redireccionar
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            reference: "",
            brand: "",
            category: "",
            materiales: "",
            dimensiones: "",
            description: "",
            availability: "",
            price: "",
            quantity: "",
            photography: "",
        },
        onSubmit: datos => {
            Swal.fire({
                title: 'Deseas crear el producto?',
                text: "Luego puedes actualizar y/o eliminar el producto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, crear!'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        console.log(datos);
                        fetch(`http://144.22.136.162:8080/api/cookware/new`, {
                            method: "POST",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                //console.log(data);             
                            });

                        Swal.fire(

                            'El producto se creo correctamente.',
                            'success'


                        );
                        navigate('/productos');
                    } catch (error) {
                        console.log(error)
                    }

                }
            })

        }
    });

    return (
        <>

            <h1 className="text-3xl font-light mb-4">Agregar productos</h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="mb-4">

                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">REFERENCIA</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="reference"
                                type="text"
                                placeholder="Referencia"
                                value={formik.values.reference}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">MARCA</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="brand"
                                type="text"
                                placeholder="Marca"
                                value={formik.values.brand}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CATEGORIA</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                type="text"
                                placeholder="Categoria"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">MATERIALES</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="materiales"
                                type="text"
                                placeholder="Materiales"
                                value={formik.values.materiales}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DIMENSIONES</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dimensiones"
                                type="text"
                                placeholder="Dimensiones"
                                value={formik.values.dimensiones}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DESCRIPCION</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                type="text"
                                placeholder="Descripcion"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DISPONIBILIDAD</label>
                        <select
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="availability"
                            value={formik.values.availability}
                            onChange={formik.handleChange}
                        >   <option selected> </option>
                            <option value="true">Disponible</option>
                            <option value="false">No Disponible</option>
                        </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">PRECIO</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="number"
                                placeholder="Precio"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                            />
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CANTIDAD</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="quantity"
                                type="number"
                                placeholder="Cantidad"
                                value={formik.values.quantity}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">FOTOGRAFIA</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="photography"
                                type="text"
                                placeholder="Fotografia"
                                value={formik.values.photography}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <input
                            type="submit"
                            className="bg-green-900 hover:bg-green-600 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar Producto"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default AgregarProducto;