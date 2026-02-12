import {useState} from "react";
import {Tarea} from "../models/Tarea";


export default function FormularioTarea(){





    return(
        <div className="tarea-container">
            <h2>Creacion de tareas</h2>
            <form className="formulario-tarea" >
                <label htmlFor="nombre">Nombre:</label>
                <input name="nombre" id="nombre" type="text" placeholder="Nombre" required minLength={3}/>
                <label htmlFor="titulo">Título:</label>
                <input name="titulo" id="titulo" type="text" placeholder="Titulo de la tarea" required minLength={6}/>
                <label htmlFor="descripcion">Descripción:</label>
                <input name="descripcion" id="descripcion" type="text" placeholder="Descripcion de la tarea" required minLength={6} maxLength={33}/>
                <label htmlFor="fechaLimite">Fecha Limite</label>
                <input name="fechaLimite" id="fechaLimite" type="date" required/>

                <button type="submit">Crear Tarea</button>
            </form>
        </div>
    )

}