import React from "react";
import FormularioEditar from "../components/FormularioEditar";
import MostrarCompletadas from "../components/MostrarCompletadas";
import MostrarAtrasadas from "../components/MostrarAtrasadas";
import LogicaTareas from "../hooks/LogicaTareas";
import MostrarPendientes from "../components/MostrarPendientes";


interface VerTareasProps {

}

export const VerTareas: React.FC<VerTareasProps> = ({ }: VerTareasProps) => {

    const {
        listaTareas,
        completarTarea,
        eliminarTarea,
        editarTarea,
        tareaEditando,
        guardarCambios,
        setTareaEditando
    } = LogicaTareas();
    return (

<div className="w-full max-w-6xl mx-auto px-4 mt-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

    <div className="bg-white rounded-2xl shadow-lg p-6 lg:h-[70vh] flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Pendientes</h2>

      <div className="flex-1 overflow-y-auto">
        <MostrarPendientes
          tareas={listaTareas}
          completar={completarTarea}
          eliminar={eliminarTarea}
          editar={editarTarea}
        />
      </div>
    </div>

    <div className="lg:h-[70vh] flex flex-col gap-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col min-h-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Completadas</h2>

        <div className="flex-1 overflow-y-auto min-h-0">
          <MostrarCompletadas tareas={listaTareas} eliminar={eliminarTarea} />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col min-h-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Atrasadas</h2>

        <div className="flex-1 overflow-y-auto min-h-0">
          <MostrarAtrasadas tareas={listaTareas} eliminar={eliminarTarea} />
        </div>
      </div>
    </div>

    {tareaEditando && (
      <FormularioEditar
        tarea={tareaEditando}
        guardar={guardarCambios}
        cancelar={() => setTareaEditando(null)}
      />
    )}
  </div>
</div>
    )
}