import React from 'react'
import { useEffect,useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [selectProduct,setSelectProduct] = useState(null)
    let{id}=useParams()
    const getDetailProduct = async()=>{
        let url=`https://my-json-server.typicode.com/JeongHeon113/hnm-project/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        console.log('dat',data)
        setSelectProduct(data)
    }
    useEffect(() => {
        getDetailProduct()
    
    }, [])
  return (
    <Container>
        <Row>
            <Col className='detail-product' lg='6'>
                <img src={selectProduct?.img}/>
            </Col>
            <Col className='detail-info' lg='6'>
                <div className='title'>{selectProduct?.title}</div>
                <div>₩{selectProduct?.price}</div>
                <div>{selectProduct?.new==true?"신제품":""}</div>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail