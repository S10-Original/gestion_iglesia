import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import Login from "../ventanas/Login";
import Principal from "../ventanas/Principal";


 const Rutas = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Login/>} />
                    <Route exact path='/Principal' element={<Principal/>} />
                </Routes>
            </Router>
            
        </div>
    );
};

export default Rutas;