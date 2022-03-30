import { useState } from "react"

const Estados = () => {
    const [data, setData] = useState(true);

    const estado = () => (data === true) ? setData(false): setData(true);

  return (
    <>
    <h2>Forma uno</h2>
        { data
        ? <button onClick={estado} style={{ color: "white", background: "green", padding: "10px", width: "200px"}}>Es verdadero</button>
        : <button onClick={estado} style={{ color: "white", background: "red", padding: "10px", width: "200px"}}>Es falso</button>
      }        

      <h2>Forma dos</h2>
        { data &&  <button onClick={estado} style={{ color: "white", background: "green", padding: "10px", width: "200px"}}>Es verdadero</button> }
        { !data &&  <button onClick={estado} style={{ color: "white", background: "red", padding: "10px", width: "200px"}}>Es falso</button> }
    </>
  )
}

export default Estados