import React from "react";
import LogicaTareas from "../hooks/LogicaTareas";
import Estadisticas from "../components/Estadisticas";

interface VerEstadisticasProps {

}

export const VerEstadisticas: React.FC<VerEstadisticasProps> = ({}: VerEstadisticasProps) =>{

  const {
    listaTareas
} = LogicaTareas();
    return (
       <div className="space-y-8">
                 <div>
                   <div className="rounded-2x1 p-6">
                     <Estadisticas tareas ={listaTareas}/>
                    </div>
                     </div>
                     </div>
    )
}