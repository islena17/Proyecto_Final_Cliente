import type { Tarea } from "../models/Tarea";


type Props = {
    tareas: Tarea[];
    eliminar: (id: string) => void;
}
export default function MostrarCompletadas({ tareas, eliminar }: Props) {

    const completadas = tareas.filter(t => t.completada); //filtramos las tareas completadas

    return (
        <div>

            <div className="grid gap-5">
                {completadas.map((t) => (
                    <div
                        key={t.id}
                        className="bg-green-50 border border-green-200 rounded-lg p-5 shadow-sm opacity-80"
                    >
                        <h3 className="text-lg font-semibold text-green-800 line-through">
                            {t.titulo}
                        </h3>

                        <p className="text-gray-600 line-through">
                            {t.descripcion}
                        </p>

                        <p className="text-sm text-gray-500 mt-2">
                            Asignada a: <span className="italic">{t.nombre}</span>
                        </p>

                        <button
                            onClick={() => eliminar(t.id)}
                            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>

    )
}