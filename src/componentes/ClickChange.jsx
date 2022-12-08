import React, { useEffect , useState } from 'react'

const ClickChange = () => {

  const LoadingView = () => {
    return (
      <strong className='m-10 text-xl'>Cargando...</strong>
    )
  }
  const Ready = () => {
    return (
      <strong className='m-10 text-xl'>Listo</strong>
    )
  }

  const [loading, setLoading] = useState(true) 

  useEffect( () => {
    setTimeout(() => {
      console.log("Cargado");
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <div>
      {/* { loading ? 
        <strong className='m-10 text-xl'>Cargando...</strong>
      :
      <strong className='m-10 text-xl'>Listo</strong>
      } */}
      
      { loading ? <LoadingView/> : <Ready/>}
    </div>
  )
}

export default ClickChange