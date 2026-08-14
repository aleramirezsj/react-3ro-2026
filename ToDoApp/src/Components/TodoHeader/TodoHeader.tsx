import logoisp20 from '../../assets/logoisp20.png'

export default function TodoHeader() {
      const imgStyle = { margin: "0 auto",
                    width: "200px",
                    height: "200px"
   }
  return (
    <>
        <h1>Conociendo React</h1>
        <img src={logoisp20} alt="Logo ISP20" style={imgStyle} />
    </>
  )
}