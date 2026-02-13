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
<div className="w-full flex justify-center px-4">
  <div className="w-full max-w-2xl bg-white/90 backdrop-blur rounded-2xl shadow-lg ring-1 ring-black/5 p-6 sm:p-8">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">
        Estadísticas
      </h2>

      <span className="text-xs sm:text-sm text-slate-500">
        Por persona
      </span>
    </div>

    <ul className="divide-y divide-slate-100">
      {Object.entries(tareasPorPersona).map(([nombre, estado]) => (
        <li
          key={nombre}
          className="py-4 flex items-center justify-between gap-4 hover:bg-slate-50/70 rounded-xl px-3 -mx-3 transition"
        >
          <div className="min-w-0">
            <p className="font-semibold text-slate-800 truncate">{nombre}</p>
            <p className="text-sm text-slate-500">
              Resumen de tareas
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {estado.completadas} completadas
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              {estado.pendientes} pendientes
            </span>
          </div>
        </li>
      ))}
    </ul>

    {/* Extra opcional: si no hay datos */}
    {Object.keys(tareasPorPersona).length === 0 && (
      <div className="text-center py-10 text-slate-500">
        No hay estadísticas todavía.
      </div>
    )}
  </div>
</div>
  );
}