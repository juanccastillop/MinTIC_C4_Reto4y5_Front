import React from "react";
import { Routes, Route } from 'react-router';
import Ordenes from './components/Pages/Orders';
import Usuarios from './components/Pages/Users';
import Productos from './components/Pages/Products';
import Login from "./components/Pages/Login";

import Sidebar from './components/ui/Sidebar';
import DetalleOrdenes from './components/Pages/OrdersDetail';
import DetalleUsuarios from './components/Pages/UsersDetail';
import AgregarProducto from './components/Pages/AddProduct';
import ActualizarProducto from './components/Pages/UpdateProduct';

function App() { 
  return ( 
    <div className="w-full md:w-auto" >
      <Sidebar />
      <div className="w-full md:w-auto p-10">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ordenes" element={<Ordenes />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nueva-orden" element={<DetalleOrdenes />} />
          <Route path="/nuevo-usuario" element={<DetalleUsuarios />} />
          <Route path="/nuevo-producto" element={<AgregarProducto />} />
          <Route path="/actualizar-producto/:reference" element={<ActualizarProducto />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
