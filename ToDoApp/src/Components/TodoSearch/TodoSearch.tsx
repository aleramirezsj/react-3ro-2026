import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css"

export default function TodoSearch() {
    const { textoBusqueda, setTextoBusqueda } = React.useContext(TodoContext)!;

  return (
    <>
        <label htmlFor="search">Buscar tarea:</label>
        <input id="search" placeholder="Ingresar tarea que busca..." value={textoBusqueda} 
        onChange={
          (event) => setTextoBusqueda(event.target.value)
        }
        /> 
         <p>Valor de búsqueda: {textoBusqueda}</p>
    </>
  )
}
