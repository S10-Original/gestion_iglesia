import React from "react";
import '../css/cssPrincipal.css';

function Miembros() {
    return(
        <div className="formatoPagina">
            <div className="Botonera">
                <div className="BotoneraIzquierda">
                    <input ></input>
                    <button>Buscar</button>
                </div>
                <div className="BotoneraDerecha">
                    <button>Nuevo Registro</button>
                    <button>Reporte PDF</button>
                </div>
            </div>
            
            <div className="formatoTabla">
                <p>prueba</p>
            </div>
        </div>
    );
}

export default Miembros;