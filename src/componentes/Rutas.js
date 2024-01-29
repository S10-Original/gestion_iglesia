import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import Login from "../ventanas/Login";
import Principal from "../ventanas/Principal";
import Miembros from "../ventanas/Miembros";
import Personal from "../ventanas/Personal";
import Usuarios from "../ventanas/Usuarios";
import Cargos from "../ventanas/Cargos";
import Dinerito from "../ventanas/Dinerito";
import Ministerios from "../ventanas/Ministerios";
import Actividades from "../ventanas/Actividades";
import Links from "./Links";

 const Rutas = () => {
    return(
        <div>
            <Router>
                <Links />
                <Routes>
                    <Route exact path='/' element={<Login/>} />
                    <Route exact path='/Principal' element={<Principal/>} />
                    <Route exact path='/Miembros' element={<Miembros/>} />
                    <Route exact path='/Personal' element={<Personal/>} />
                    <Route exact path='/Usuarios' element={<Usuarios/>} />
                    <Route exact path='/Cargos' element={<Cargos/>} />
                    <Route exact path='/Dinerito' element={<Dinerito/>} />
                    <Route exact path='/Ministerios' element={<Ministerios/>} />
                    <Route exact path='/Actividades' element={<Actividades/>} />
                </Routes>
            </Router>
            
        </div>
    );
};

export default Rutas;