import React from 'react'
import styled from  "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin-top:40px;
    margin-left: 50px;
    margin-right: 50px;
    width: 180px;
    height: 220px;
    display: flex;
    object-fit: cover;
    align-items: center;
    justify-content: center;
    position: relative;
    &:hover ${Info}{
    opacity: 1;
    }

`

const Image = styled.img`
  height: 100%;
  z-index: 2;
`;

const Button = styled.div`
    padding: 10px;
    font-size: 10px;
    background-color: transparent;
    cursor: pointer;
    width: 80px;
    height: 20px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    }

`

const Product = ({item}) => {
  return (
    <Container>
                <Image src={item.img} alt=""/>     
        <Info>
            <Button>
                View Product
            </Button>
        </Info>
    </Container>
  )
}

export default Product