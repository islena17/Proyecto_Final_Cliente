import type { Tarea } from "../models/Tarea";


type Props = {

  tareas: Tarea[];
  completar: (id: string)=>void;
  eliminar: (id: string)=>void;
  editar: (id:string) => void; //esto es para llamar al array de tareas que creamos en formularioTarea
}

export default function MostrarPendientes({ tareas, completar, eliminar, editar }: Props) {
  const fechaActual = new Date();
  const pendientes = tareas.filter(t => !t.completada && t.fechaLimite > fechaActual); //filtramos a todas las tareas que (por defecto) son pendientes 

  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="grid gap-6 ">
          {pendientes.map((t) => ( //mapeamos a las pendientes
            <div
              key={t.id} className="bg-blue-100 rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-200"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {t.titulo}
              </h3>

              <p className="text-gray-700 mb-3">
                <span className="font-medium">Descripción:</span> {t.descripcion}
              </p>

              <p className="text-gray-700 mb-3">
                <span className="font-medium">Fecha Limite:</span> {t.fechaLimite.toLocaleDateString()}
              </p>

              <p className="text-gray-600 mb-5">
                <span className="font-medium">Asignada a:</span> {t.nombre}
              </p>

<div className="flex flex-col items-center gap-3 mt-4">
              <button
                onClick={() => completar(t.id)} //--> marca la tarea como completada
                className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
              >
                Completar
              </button>

              <button
                onClick={() => eliminar(t.id)}// --> elimina la tarea del array
                className="w-full bg-red-300 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Eliminar
              </button>

              
              <button
                onClick={() => editar(t.id)} // --> llama a la funcion editar que hace que el formulario editar aparezca
                className="w-full bg-gray-300 text-blue py-2 rounded-lg hover:bg-white-600 transition duration-200"
              >
                Editar
              </button>
            </div>
            </div>
          ))}
        </div>

      </div>
    </div>

  )
}
