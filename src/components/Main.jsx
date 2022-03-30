import React from 'react'
import Estados from './Estados'
import Productos from './Productos'
import ProductosAxiosApi from './ProductosAxiosApi'

const Main = () => {
  return (
    <>
      <Productos />
      <ProductosAxiosApi />
      <Estados />
    </>
  )
}

export default Main