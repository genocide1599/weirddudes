import Announcement from '../components/Announcement'
import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from "styled-components";
import { mobile } from "../responsive";

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  margin-top: -80px;
  ${mobile({ display: "none" })}
`;

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Title>
        Featured Products
      </Title>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home