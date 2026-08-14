import "./TodoList.css"

export default function TodoList(props: { children: React.ReactNode }) {
  return (
    <>
        <ul>
          {props.children}
        </ul>
    </>
  )
}