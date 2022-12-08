import React from 'react'

const ProductCard = ( { id, name , stock } ) => {



  return (
    <li>{ id } - { name } - Stock: { stock }</li>
  )
}

export default ProductCard