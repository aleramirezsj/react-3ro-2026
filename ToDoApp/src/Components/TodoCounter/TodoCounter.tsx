import "./TodoCounter.css"
import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export default function TodoCount() {
    const { completadas, total } = React.useContext(TodoContext)!;
    return (
        <h1 className="TodoCounter">
            {completadas===total ? (
                <span className="TodoCounter--complete">¡Felicidades! Completaste todas tus tareas</span>
            ) : (
                <span className="TodoCounter--incomplete">Completaste {completadas} de {total} tareas</span>
            )}
        </h1>
    )
}