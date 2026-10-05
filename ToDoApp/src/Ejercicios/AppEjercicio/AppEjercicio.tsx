import AccionesAlumno from "../../Components/AccionesAlumno/AccionesAlumno";
import DatosAlumno from "../../Components/DatosAlumno/DatosAlumno";

function AppEjercicio() {
  function verAlumno(setUltimaAccion: (accion: string) => void) {
        setUltimaAccion("algo, lo que yo quiera");
    }
    function editarAlumno() {
        alert('Editar alumno');
    }
    function eliminarAlumno() {
        alert('Eliminar alumno');
    }
  return (
    <>
      <Encabezado />
      <DatosAlumno 
        alumno="Alejandro" 
        curso="3ro año" 
        anio={new Date().getFullYear()} 
        enlace="https://www.google.com" />
      <Materias />
      <AccionesAlumno 
        verAlumno={verAlumno} 
        editarAlumno={editarAlumno} 
        eliminarAlumno={eliminarAlumno} />
      <PieDePagina />
    </>
  );
}

function Encabezado() {
  return (
    <header>
      <h1>Bienvenido a la App de Ejercicio</h1>
    </header>
  );
}

function Materias() {
  const materias = ['Matemática', 'Lengua', 'Ciencias', 'Historia'];

  return (
    <section>
      <h2>Materias</h2>
      <ul>
        {materias.map((materia, index) => (
          <li key={index}>{materia}</li>
        ))}
      </ul>
    </section>
  );
}

function PieDePagina() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Mi App de Ejercicio. Todos los derechos reservados.</p>
    </footer>
  );
}

export {AppEjercicio, Encabezado, Materias, PieDePagina};