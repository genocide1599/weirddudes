import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'


const Container = styled.div`



`

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList