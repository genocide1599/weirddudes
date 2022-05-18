import React from 'react'
import { useState } from "react";
import styled from "styled-components"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { sliderItems } from '../data';
import { mobile } from "../responsive";

const Container = styled.div`
  margin-top: 35px;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`

const Image = styled.img`
  height: 80%;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);  
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const InfoContainer = styled.div`
    padding: 50px;
    flex: 1;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
    
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowBackIosOutlined/>
        </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide key={item.id}>
                        <ImgContainer>
                                <Image src = {item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIosOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider