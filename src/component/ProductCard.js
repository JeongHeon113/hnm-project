import React from 'react'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const goToDetail = ()=>[
        navigate(`/products/${product.id}`)
    ]
  return (
    <Col onClick={goToDetail} className='product-card' lg="3">
        <img src={product?.img}/>
        <div >{product?.title}</div>
        <div>₩{product?.price}</div>
        <div>{product?.new==true?"신제품":""}</div>
        
    </Col>
  )
}

export default ProductCard