import {Tarea} from "../models/Tarea";

    type Props ={

        tareas: Tarea[]; //esto es para llamar al array de tareas que creamos en formularioTarea
    }

export default function MostrarPendientes({tareas} : Props){
     const pendientes = tareas.filter(t => !t.completada); //filtramos a todas las tareas que (por defecto) son pendientes 

    return(
       <div className="min-h-screen bg-gray-100 py-10 px-4">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      Tareas Pendientes
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {pendientes.map((t) => ( //mapeamos a las pendientes
        <div
          key={t.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-200"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            {t.titulo}
          </h3>

          <p className="text-gray-700 mb-3">
            <span className="font-medium">Descripción:</span> {t.descripcion}
          </p>

          <p className="text-gray-600 mb-5">
            <span className="font-medium">Asignada a:</span> {t.nombre}
          </p>

          <button
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200" //proximamente este botón activará el metodo completar
          >
            Completar
          </button>
        </div>
      ))}
    </div>

  </div>
</div>
            
    )
}
