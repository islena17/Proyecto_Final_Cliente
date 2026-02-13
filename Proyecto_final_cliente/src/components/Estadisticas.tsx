import type {Tarea} from "../models/Tarea"


type Props = {
    tareas: Tarea[];

}
export default function Estadisticas({tareas}: Props){

type EstadisticasPersona = {
  completadas: number;
  pendientes: number;
};

const tareasPorPersona = tareas.reduce<Record<string, EstadisticasPersona>>((acc, t) => {
  if (!acc[t.nombre]) {
    acc[t.nombre] = { completadas: 0, pendientes: 0 };
  }

  if (t.completada) {
    acc[t.nombre].completadas += 1;
  } else {
    acc[t.nombre].pendientes += 1;
  }

  return acc;
}, {});

return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Estadisticas</h2>
    <ul>
      {Object.entries(tareasPorPersona).map(([nombre, estado]) => (
        <li key={nombre}>
          <strong>{nombre}</strong>- Completadas: {estado.completadas} | Pendientes: {estado.pendientes}
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
}