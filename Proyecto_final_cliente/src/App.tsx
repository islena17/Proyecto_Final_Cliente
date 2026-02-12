import { useState } from 'react'
import { Tarea } from "./models/Tarea"
import FormularioTarea from './components/FormularioTarea'
import MostrarPendientes from './components/MostarPendientes'
import MostrarCompletadas from './components/MostrarCompletadas'

function App() {
  const [count, setCount] = useState(0)

  //aqui pongo toda la logica para las tareas
  const [listaTareas, setListaTareas] = useState<Tarea[]>([]);

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

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">

        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <FormularioTarea crear={(t) => setListaTareas(prev => [...prev, t])} />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <MostrarPendientes tareas={listaTareas} completar={completarTarea} eliminar={eliminarTarea}/>
            </div>

             <div className="bg-white rounded-2xl shadow-lg p-6">
              <MostrarCompletadas tareas={listaTareas} eliminar={eliminarTarea}/>
            </div>
          </div>
        </div>
      </div>
        </>
        )
}

        export default App
