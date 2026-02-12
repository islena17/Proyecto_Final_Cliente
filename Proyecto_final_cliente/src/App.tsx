import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Tarea } from "./models/Tarea"
import FormularioTarea from './components/FormularioTarea'

function App() {
  const [count, setCount] = useState(0)

  //aqui pongo toda la logica para las tareas
  const [listaTareas, setListaTareas] = useState<Tarea[]>([]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">

        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <FormularioTarea crear={(t) => setListaTareas(prev => [...prev, t])} />
            </div>
          </div>
        </div>
      </div>
        </>
        )
}

        export default App
