import React from 'react'
import Img from 'react-bootstrap/Image'
import coffee from './coffee.png'

const Image = () => {
  return (
    <Img src={coffee} style={{height:400 , width : 500}} className=" fluid" alt="Italian Trulli"/>  
    )
}

export default Image;