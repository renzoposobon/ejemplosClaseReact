import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {

  const PRODUCTS = [
    { id: 1, name: "iPhone", stock: 12},
    { id: 2, name: "Galaxy", stock: 14},
    { id: 3, name: "Xiaomi", stock: 23}
  ]
 

  const [products, setProducts] = useState([/*"Motorola", "Nokia"*/])

  useEffect(() => {
    // acá se maneja la asincronía
    getProducts().then( respuesta => {
      setProducts( respuesta )
    } )
  }, [])

  const getProducts = () => { 
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve( PRODUCTS )
      }, 3000);
    })
   }

  // const randomPromise = () => {
  //   const productPromise = new Promise((resolve, reject) => {
  //     const rand = Math.random()
  //     console.log(rand);
  //     if (rand > 0.5) {
  //       resolve("Se resolvió satisfactoriamente")
  //     }
  //     reject("Rechazado")
  //   })
  //   productPromise.then( ( respuesta ) => {
  //     console.log("RESPUESTA: ", respuesta);
  //   }).catch( ( error ) => {
  //     console.log("ERROR:", error);
  //   })
  // }

  return (
    <div>
      <h1>Product List</h1>
      { products.map( (p, i) => <ProductCard key={p.id} {...p} /> ) }
    </div>
  )
}

export default ProductList