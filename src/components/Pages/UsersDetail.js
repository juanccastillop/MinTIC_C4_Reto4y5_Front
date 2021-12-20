import React from 'react'; 

const DetalleUsuarios = () => {





   return (
      <>
         <h1 className="text-3xl font-light mb-4">Detalle usuarios</h1>
         <div className="flex justify-center mt-10">
            <div className="w-full max-w-3xl">
               <form

               >
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ID</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="id"
                        type="number"
                        placeholder="id"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificación</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="identificacion"
                        type="number"
                        placeholder="identificacion"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nombre"
                        type="text"
                        placeholder="Nombre"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fecha de cumpleaños</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cumpleaños"
                        type="date"
                        placeholder=""
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes de cumpleaños</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="mescumpleaños"
                        type="number"
                        placeholder="Mes de cumpleaños"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="direccion"
                        type="text"
                        placeholder="Dirección"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Celular</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="celular"
                        type="number"
                        placeholder="Telefono Celular"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Correo electronico</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Correo Electrónico"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="text"
                        placeholder="Contraseña"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="zona"
                        type="text"
                        placeholder="Zona"
                     />
                  </div>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Tipo Usuario</label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="tipo"
                        type="text"
                        placeholder="Tipo Usuario"
                     />
                  </div>


                  <input
                     type="submit"
                     className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                     value="Agregar usuario"
                  />
               </form>
            </div>
         </div>
      </>
   );
}

export default DetalleUsuarios;
