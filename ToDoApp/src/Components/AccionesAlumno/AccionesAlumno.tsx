import { useState } from "react";

export default function AccionesAlumno({ 
                        verAlumno, 
                        editarAlumno, 
                        eliminarAlumno }: 
                        { verAlumno: () => void; 
                          editarAlumno: () => void; 
                          eliminarAlumno: () => void }) {

    const [ultimaAccion, setUltimaAccion] = useState<string>("");
    const [showLastAction, setLastAction] = useState<boolean>(true);
    const [mensaje, setMensaje] = useState<string>("");

    const lista: string[] = ["Juan", "María", "Pedro", "Ana"];

    const [listaAlumnos, setListaAlumnos] = useState<string[]>(lista);

    return (
        <>
            <h2>Acciones del Alumno: {mensaje}</h2>
            {showLastAction && <h3>Última acción realizada:{ultimaAccion}</h3>}
            <button onClick={() => { setUltimaAccion("Ver alumno"); verAlumno(); }}>Ver alumno</button>
            <button onClick={() => { setUltimaAccion("Editar alumno"); editarAlumno(); }}>Editar alumno</button>
            <button onClick={() => 
                setListaAlumnos(listaAlumnos.filter((alumno) => alumno !== "Javier"))}>Eliminar alumno</button>
            <button onClick={() => setLastAction(!showLastAction)}>Mostrar/Ocultar ultima acción</button>
            <p>Mensaje de prueba</p>
            <label htmlFor="mensaje">Mensaje:</label>
            <input type="text" id="mensaje" name="mensaje" 
                value={mensaje} 
                onChange={(e) => setMensaje(e.target.value)}/>
            <p>Lista de alumnos:</p>
            <ul>
                {listaAlumnos.map((alumno,index) => (
                    <li key={index}>{alumno}</li>
                ))}
            </ul>
            <button onClick={
                () => setListaAlumnos([...listaAlumnos, "Javier"])}
            >Agregar Alumno</button>
        </>
    )
}