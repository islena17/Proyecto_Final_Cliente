import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Tarea} from "./models/Tarea"
import FormularioTarea from './components/FormularioTarea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div id='Tareas-container'>
   <FormularioTarea></FormularioTarea>

    </div>
    </>
  )
}

export default App
