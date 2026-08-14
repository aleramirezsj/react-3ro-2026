import React from 'react';

export type Todo = {
  texto: string;
  completado: boolean;
};

export type TodoContextType = {
  tareasFiltradas: Todo[];
  completadas: number;
  total: number;
  textoBusqueda: string;
  openModal: boolean;
  completeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  addTodo: (texto: string) => void;
  setTextoBusqueda: (texto: string) => void;
  setOpenModal: (open: boolean) => void;
};


const TodoContext = React.createContext<TodoContextType | null>(null);

function TodoProvider({ children }: { children: React.ReactNode }) {
  const listaTareas = [
    { texto: 'Cambiar la garrafa', completado: false },
    { texto: 'Ir al padel', completado: false },
    { texto: 'actualizar el CV', completado: false },
    { texto: 'Hacer la compra', completado: false },
  ];

  const [tareasApp, setTareasApp] = React.useState<Todo[]>(listaTareas);
  const [textoBusqueda, setTextoBusqueda] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  
  const completadas = tareasApp.filter(tarea => tarea.completado).length;
  const total = tareasApp.length;
  const tareasFiltradas = tareasApp.filter(
    tarea => tarea.texto.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  const completeTodo = (text:string) => {
      const newTodos = [...tareasApp];
      const todoIndex = newTodos.findIndex((todo) => todo.texto === text );
      newTodos[todoIndex].completado = !newTodos[todoIndex].completado ;
      setTareasApp(newTodos); };
  
  const deleteTodo = (text:string) => {
      const newTodos = [...tareasApp];
      const todoIndex = newTodos.findIndex((todo) => todo.texto === text );
      newTodos.splice(todoIndex, 1);
      setTareasApp(newTodos); }
  
  const addTodo = (text:string) => {
          const newTodos = [...tareasApp];
          newTodos.push({
              texto: text,
              completado: false,
              
          });
          setTareasApp(newTodos);
      }
    return (
    <TodoContext.Provider value={{ 
      tareasFiltradas,
      completadas,
      total,
      textoBusqueda,
      openModal,
      completeTodo,
      deleteTodo,
      addTodo,
      setTextoBusqueda,
      setOpenModal  
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
