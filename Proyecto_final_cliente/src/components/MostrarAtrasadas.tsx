import type { Tarea } from "../models/Tarea";


type Props = {
    tareas: Tarea[];
    eliminar: (id: string) => void;
}

export default function MostrarAtrasadas({ tareas, eliminar }: Props) {

    const fechaActual = new Date();
    const atrasadas = tareas.filter(t => t.fechaLimite < fechaActual && !t.completada);// filtramos todas aquellas tareas que estén atrasdas y NO estén completadas

    return (

        <div>

            <div className="grid gap-6">
                {atrasadas.map((t) => (
                    <div
                        key={t.id}
                        className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5 shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-2">
                            {t.titulo}
                        </h3>

                        <p className="text-gray-700 mb-2">
                            <span className="font-medium">Descripción:</span> {t.descripcion}
                        </p>

                        <p className="text-gray-700 mb-3">
                            <span className="font-medium">Fecha Limite:</span> {t.fechaLimite.toLocaleDateString()}
                        </p>

                        <p className="text-gray-600">
                            <span className="font-medium">Asignada a:</span> {t.nombre}
                        </p>

                        <button
                            onClick={() => eliminar(t.id)}
                            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                            Eliminar
                        </button>   {/*no sabia si hacerle tambien un boton de completado tambien, asi que solo puse el de eliminar*/}
                    </div>
                ))}
            </div>
        </div>

    )

}