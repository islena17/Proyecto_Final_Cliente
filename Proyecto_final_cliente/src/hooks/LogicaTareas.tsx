import { useState, useEffect } from 'react';
import type { Tarea } from "../models/Tarea";

const guardar_tareas = "tareas";

//AQUI PONGO TODA LA LOGICA DE TAREAS, ASI APP ESTÁ LIMPIO

export default function LogicaTareas() {

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
          const tarea:  Tarea= {
            nombre: t.nombre, 
            titulo: t.titulo, 
            descripcion: t.descripcion, 
            fechaLimite: new Date(t.fechaLimite), 
            id: t.id, 
            estado: t.estado, 
            completada:t.completada, 
            fechaCreacion: t.fechaCreacion};
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
        const nueva: Tarea ={
          id: t.id,
          nombre: t.nombre, 
          titulo: t.titulo, 
          descripcion: t.descripcion, 
          fechaLimite: t.fechaLimite,
          fechaCreacion: t.fechaCreacion,
          completada: true,
          estado: "completado"};
        nueva.id = t.id;
        nueva.fechaCreacion = t.fechaCreacion;
        nueva.completada = true;
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

  //editar tarea
  const [tareaEditando, setTareaEditando] = useState<Tarea | null>(null);

  const editarTarea = (id: string) => {
  const tarea = listaTareas.find(t => t.id === id);
  if (tarea) {
    setTareaEditando(tarea);
  }
};

const guardarCambios = (tareaActualizada: Tarea) => {
  setListaTareas(prev =>
    prev.map(t =>
      t.id === tareaActualizada.id ? tareaActualizada : t
    )
  );

  setTareaEditando(null); // cerrar formulario
};


  return { //este return sirve para devolver la lista de tareas y los metodos completar y eliminar
    listaTareas,
    completarTarea,
    eliminarTarea,
    setListaTareas,
    editarTarea,
    tareaEditando,
    guardarCambios,
    setTareaEditando
  };
};