import logo from '../../assets/logoisp20.png'

export default function Alumno() {
  const alumno = 'Alejandro'
  const curso = '3ro año'
  const anio = new Date().getFullYear()
  const enlace = 'https://www.google.com'
  const styleCenterImage={
    display: 'block',
    margin: '0 auto',
    width: '100px'
  }


  return (
    <>
      <h1>{alumno}</h1>
      <p>Curso: {curso}</p>
      <p>Año: {anio}</p>
      <a href={enlace} target="_blank" rel="noopener noreferrer">Ir a Google</a>
      <p style={styleCenterImage}>
        <img src={logo} alt="Logo del instituto" width={100} style={styleCenterImage} />
      </p>
      <p>La suma de 12+34 es {12 + 34}</p>
    </>
  )
}