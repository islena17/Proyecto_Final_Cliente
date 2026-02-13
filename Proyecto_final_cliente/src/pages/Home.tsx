import React from "react";
import FormularioTarea from "../components/FormularioTarea";
import LogicaTareas from "../hooks/LogicaTareas";

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}: HomeProps) =>{

  const {
    setListaTareas,} = LogicaTareas();
    return (
       <div className="space-y-8">
                 <div>
                   <div className="rounded-2x1 p-6">
                     <FormularioTarea crear={(t) => setListaTareas(prev => [...prev, t])} />
                    </div>
                     </div>
                     </div>
    )
}