import React from 'react'
import { useEffect,useState } from 'react'
import {  Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../component/ProductCard'
const ProductAll = () => {
    const [query,setQuery] =useSearchParams()
    const [product,setProduct] =useState([])
    const getProductAll = async()=>{
        let searchQuery = query.get('q')||""
        let url =`https://my-json-server.typicode.com/JeongHeon113/hnm-project/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        setProduct(data)
        console.log('product',product)
    }
    useEffect(() => {
        getProductAll()
    }, [query])
  return (
    <Container>
        <Row>
            {product.map((product)=><ProductCard product={product}/>)}
        </Row>
    </Container>
  )
}

export default ProductAll