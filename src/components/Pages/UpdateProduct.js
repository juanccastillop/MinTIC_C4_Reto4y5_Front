import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';



const ActualizarProducto = () => {

    // Hook para redireccionar
    const navigate = useNavigate();

    const { reference } = useParams();


    const [productosActualizar, guardarProductosActualizar] = useState([]);

    fetch(`http://144.22.136.162:8080/api/cookware/${reference}`)
        .then((res) => res.json())
        .then((data) => {

            guardarProductosActualizar(data);
        });

        const { brand, category, materiales, dimensiones, description, availability, quantity, price, photography } = productosActualizar;

    const formik = useFormik({
        initialValues: {
            reference: reference,
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
                title: 'Estas seguro de actualizar el producto?',
                text: "Mas adelante podras actualizar y/o eliminar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, actualizar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        console.log(datos);
                        fetch(`http://144.22.136.162:8080/api/cookware/update`, {
                            method: "PUT",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);             
                            });

                        Swal.fire(
                            'Actualizado!',
                            'Producto actualizado correctamente.',
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
            <div className="md:flex min-h-screen" >

                <div className="md:w-2/5 xl:w-4/5 p-6">
                    <h1 className="text-3xl font-light mb-4">Actualizar Productos</h1>

                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="mb-4">
                                    <p className="font-bold text-2xl text-yellow-600 mb-4">{reference} </p>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">MARCA</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="brand"
                                        type="text"
                                        placeholder="brand "
                                        value={formik.values.brand || brand}
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
                                        value={formik.values.category || category}
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
                                        value={formik.values.materiales || materiales}
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
                                        value={formik.values.dimensiones || dimensiones}
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
                                        value={formik.values.description || description}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DISPONIBILIDAD</label>
                                <select
                                    className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                    id="availability"
                                    value={formik.values.availability || availability}
                                    onChange={formik.handleChange}
                                >   <option selected> </option>
                                    <option value="true">Disponible</option>
                                    <option value="false">No Disponible</option>
                                </select>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">PRECIO</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="price"
                                        type="number"
                                        placeholder="Precio"
                                        value={formik.values.price || price}
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
                                        value={formik.values.quantity || quantity}
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
                                        value={formik.values.photography || photography}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    className="bg-green-800 hover:bg-green-600 w-full mb-8 p-2 text-white uppercase font-bold"
                                    value="Actualizar Producto"
                                />
                                <Link to="/productos" className="bg-gray-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                    Cancelar
                                </Link>
                            </form>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default ActualizarProducto;