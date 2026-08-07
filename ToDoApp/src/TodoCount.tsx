export default function TodoCount({ completadas, total }) {
    return (
        <h1>
            Completaste {completadas} de {total} tareas
        </h1>
    )
}