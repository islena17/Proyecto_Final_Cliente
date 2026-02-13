import './App.css'
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home';


import 'bootstrap/dist/css/bootstrap.min.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { VerTareas } from './pages/VerTareas';
import { VerEstadisticas } from './pages/VerEstadisticas';

function App() {

  //HE ELIMINADO TODA LA LOGICA QUE TENIA ALPRINCIPIO Y LA HE PASADO AL HOOK "LOGICA TAREA"

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/verTareas" element={<VerTareas/>}/>
          <Route path="/verEstadisticas" element={<VerEstadisticas/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );

}
export default App;
