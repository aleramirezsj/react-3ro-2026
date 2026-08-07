export default function TodoItem({ texto }: { texto: string }) {
    return (
        <li>
            <span>V</span>
            <p>{texto}</p>
            <span>X</span>
        </li>
    )
}