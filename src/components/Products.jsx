import React from 'react'
import styled from  "styled-components"
import { popularProducts } from '../data'
import Product from "./Product"

const Container = styled.div`
margin-top: -30px;
    padding: 20px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <Product item = {item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products