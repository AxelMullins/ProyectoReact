import React from 'react'
import Estados from './Estados'
import Productos from './Productos'
import ProductosAxiosApi from './ProductosAxiosApi'
import Redes from './Redes'

const Main = () => {
  return (
    <>
      <Productos />
      <ProductosAxiosApi />
      <Estados />
      <Redes/>
    </>
  )
}

export default Main