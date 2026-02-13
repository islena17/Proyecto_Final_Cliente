import { useState } from "react";
import type { Tarea } from "../models/Tarea";



type Props = {
  crear: (tarea: Tarea) => void; //el props este es para llamar al metodo crear de la App 
}

export default function FormularioTarea({ crear }: Props) {


  //constantes del formulario
  const [nombre, setNombre] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaLimite, setFechaLimite] = useState("");


  //evento que crea una nueva tarea
  const crearTarea = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nueva: Tarea = {
      id: crypto.randomUUID(),
      nombre, 
      titulo, 
      descripcion,
      estado: "pendiente",
      completada: false,
      fechaCreacion: new Date(),
      fechaLimite: new Date(fechaLimite)
    };

    setNombre("");
    setTitulo("");
    setDescripcion("");
    setFechaLimite("");

    crear(nueva);
  };


  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Creación de tareas
        </h2>

        <form className="space-y-5" onSubmit={crearTarea}>


          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre:
            </label>
            <input
              name="nombre"
              id="nombre"
              type="text"
              placeholder="Nombre"
              required
              minLength={3}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>


          <div>
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
              Título:
            </label>
            <input
              name="titulo"
              id="titulo"
              type="text"
              placeholder="Titulo de la tarea"
              required
              minLength={6}
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
              Descripción:
            </label>
            <textarea
              name="descripcion"
              id="descripcion"
              placeholder="Descripcion de la tarea"
              required
              minLength={6}
              maxLength={33}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>


          <div>
            <label htmlFor="fechaLimite" className="block text-sm font-medium text-gray-700">
              Fecha límite:
            </label>
            <input
              name="fechaLimite"
              id="fechaLimite"
              type="date"
              required
              value={fechaLimite}
              onChange={(e) => setFechaLimite(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
          >
            Crear Tarea
          </button>

        </form>
      </div>
    </div>
  )

}