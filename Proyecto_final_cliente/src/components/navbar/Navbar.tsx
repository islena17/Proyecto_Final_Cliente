import React from "react";
import { Link } from "react-router-dom"

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({ }: NavbarProps) => {


    return (
        <nav className="navbar sticky-top bg-blue-100">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Gestión de Tareas</Link>

                <div className="navbar-nav d-flex flex-row gap-3">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/verTareas">Ver Tareas</Link>
                    <Link className="nav-link" to="/verEstadisticas">Estadisticas</Link>
                </div>
            </div>
        </nav>
    )
}