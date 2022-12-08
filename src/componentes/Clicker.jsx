import React, { useEffect, useState } from 'react'

const Clicker = () => {

    const [count, setCount] = useState(0)

    const clickHandler = () => {
      console.log("se hizo click");
      setCount( count + 1)
    }

    useEffect( () => {
      console.log("se hace render en el montaje y cada vez que hago click");
    })

    useEffect( () => {
      console.log("Se hace render SOLO EN EL MONTAJE");
    }, [] )

    return (
      <div className='p-5 flex flex-col '>
          <strong>Clicker</strong>
          <button onClick={clickHandler} className='btn btn-primary w-28'>Aumentar</button>
          <strong> { count } </strong>
      </div>
    )
}

export default Clicker