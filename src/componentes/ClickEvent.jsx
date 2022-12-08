import React from 'react'

const ClickEvent = () => {
  const onClickHandler = ( e ) => {
    console.log("Click----->");
    console.log( e.nativeEvent );
  }

  const onChangeInput = ( event ) => {
    console.log("Cambió: ", event.key);
    const vocales = [ "a", "e", "i", "o", "u" ]
    if (vocales.includes(event.key.toLowerCase())) {
      event.preventDefault()
    }
  }

  return (
    <div className='m-10'>
        <button onClick={onClickHandler} className='btn'> Da click aquí </button>
        <h1 className='text-xl my-5'>Input sin vocales</h1>
        <input onKeyDown={onChangeInput} className='p-2 text-xl drop-shadow-lg' />
    </div>
  )
}


export default ClickEvent