import "./CreateTodoButton.css"

export default function TodoCreateButton() {
  return (
    <>
        <button className="CreateTodoButton"
        onClick={() => console.log('se ha hecho clic en el botón de crear tarea') }>
            +</button>
    </>
  )
}