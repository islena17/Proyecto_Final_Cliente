import { useState, useEffect } from 'react';
import { Tarea } from "../models/Tarea";

const guardar_tareas = "tareas";

//AQUI PONGO TODA LA LOGICA DE TAREAS, ASI APP ESTÁ LIMPIO

export default function LogicaTareas(){

      //aqui pongo toda la logica para las tareas
      const [listaTareas, setListaTareas] = useState<Tarea[]>([]);
      //cargamos los datos
      const [cargado, setCargado] = useState(false); // <--- NUEVA GUARDA, 
      //he tenido que colocarlo asi porque se me generaba un bucle al iniciar el cargado de datos
    
      // 1. EFECTO DE CARGA 
      useEffect(() => {
        const tareasStorage = localStorage.getItem(guardar_tareas);
    
        if (tareasStorage) {
          try {
            const parsed = JSON.parse(tareasStorage) as any[];
            const tareas = parsed.map((t) => {
              const tarea = new Tarea(t.nombre, t.titulo, t.descripcion, new Date(t.fechaLimite));
              tarea.id = t.id;
              tarea.estado = t.estado ?? (t.completada ? "completada" : "pendiente");
              tarea.completada = Boolean(t.completada);
              tarea.fechaCreacion = new Date(t.fechaCreacion);
              return tarea;
            });
            setListaTareas(tareas);
          } catch (e) {
            console.error("Error al cargar", e);
          }
        }
    
        setCargado(true);
      }, []);
    
      // EFECTO DE GUARDADO
      useEffect(() => {
        // SI NO HEMOS CARGADO, NO GUARDAMOS (Esto evita borrar el storage con [])
        if (!cargado) return;
    
        localStorage.setItem(guardar_tareas, JSON.stringify(listaTareas));
        console.log("Guardado en storage!");
      }, [listaTareas, cargado]); // <--- Depende de ambos
    
      //aqui pongo la logica para completar las tareas 
      const completarTarea = (id: string) => {
        setListaTareas((prev) =>
          prev.map((t) => {
            if (t.id !== id) return t;
            const nueva = new Tarea(t.nombre, t.titulo, t.descripcion, t.fechaLimite);
            nueva.id = t.id;
            nueva.fechaCreacion = t.fechaCreacion;
            nueva.estaCompletada();
            nueva.estado = "completada";
            return nueva;
          }));
      };
    
      //eliminar tareas
      const eliminarTarea = (id: string) => {
        setListaTareas(prev =>
          prev.filter(t => t.id !== id)
        );
      };

      return { //este return sirve para devolver la lista de tareas y los metodos completar y eliminar
    listaTareas,
    completarTarea,
    eliminarTarea,
    setListaTareas
  };
};