import { Tarea } from "../models/Tarea";

type Props = {
    tareas: Tarea[];
    eliminar: (id: string) => void;
}

export default function MostrarAtrasadas({ tareas, eliminar }: Props) {

    const fechaActual = new Date();
    const atrasadas = tareas.filter(t => t.fechaLimite < fechaActual);// no lo he podido testear

    return (

        <div>
            <h2 className="text-3xl font-bold text-red-700 mb-6">
                Tareas Atrasadas
            </h2>

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

                        <p className="text-gray-600">
                            <span className="font-medium">Asignada a:</span> {t.nombre}
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