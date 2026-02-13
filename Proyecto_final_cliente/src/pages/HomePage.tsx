import FormularioTarea from '../components/FormularioTarea';
import MostrarPendientes from '../components/MostarPendientes';
import MostrarCompletadas from '../components/MostrarCompletadas';
import MostrarAtrasadas from '../components/MostrarAtrasadas';
import LogicaTareas from '../hooks/LogicaTareas';
import FormularioEditar from '../components/FormularioEditar';
import Estadisticas from '../components/Estadisticas';

const HomePage = () => {

  const {
    listaTareas,
    setListaTareas,
    completarTarea,
    eliminarTarea,
    editarTarea,
    tareaEditando,
    guardarCambios,
    setTareaEditando
  } = LogicaTareas();

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">

        <div className="space-y-8">
          <div>
            <div className="rounded-2x1 p-6">
              <FormularioTarea crear={(t) => setListaTareas(prev => [...prev, t])} />

              {tareaEditando && (
                <FormularioEditar
                  tarea={tareaEditando}
                  guardar={guardarCambios}
                  cancelar={() => setTareaEditando(null)}
                />
              )}

            </div>
            <div className="rounded-2x1 p-6">
            <Estadisticas tareas={listaTareas}/>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <MostrarPendientes tareas={listaTareas} completar={completarTarea} eliminar={eliminarTarea} editar={editarTarea} />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <MostrarCompletadas tareas={listaTareas} eliminar={eliminarTarea} />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <MostrarAtrasadas tareas={listaTareas} eliminar={eliminarTarea} />
          </div>
        </div>

      </div>
    </div>
  )
}; export default HomePage;
