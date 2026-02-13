import { useState } from "react"
import type { Tarea } from "../models/Tarea";


type Props = {
    tarea: Tarea;
    guardar: (t: Tarea) => void;
    cancelar: () => void;
};

export default function FormularioEditar({ tarea, guardar, cancelar }: Props) {
    const [titulo, setTitulo] = useState(tarea.titulo);
    const [descripcion, setDescripcion] = useState(tarea.descripcion);
    const [nombre, setNombre] = useState(tarea.nombre);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        guardar({
            ...tarea,
            titulo,
            descripcion,
            nombre
        });
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
            <h2 className="text-xl font-bold mb-4">Editar Tarea</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    className="w-full border p-2 rounded"
                />

                <input
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    className="w-full border p-2 rounded"
                />

                <input
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    className="w-full border p-2 rounded"
                />

                <div className="flex gap-3">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Guardar
                    </button>

                    <button
                        type="button"
                        onClick={cancelar}
                        className="bg-gray-400 text-white px-4 py-2 rounded"
                    >
                        Cancelar
                    </button>
                </div>

            </form>
        </div>
    );
}
