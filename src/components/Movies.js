import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
    <h4>Recommended for you </h4>
    <Content>
     <Wrap>
         <img src="https://images.moviesanywhere.com/99dff0ee09c0d63f27d3137eaa511815/6a31c1f4-90cb-403e-91ac-63c871b012be.jpg" alt="" />
     </Wrap>
     <Wrap>
         <img src="https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg" alt="" />
     </Wrap>
     <Wrap>
         <img src="https://lumiere-a.akamaihd.net/v1/images/homepage-hero-encanto-m-ph_657b4505.jpeg?region=0,0,800,602" alt="" />
     </Wrap>
     <Wrap>
         <img src="https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg?region=0%2C0%2C540%2C810" alt="" />
     </Wrap>
     <Wrap>
         <img src="https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg?region=0%2C0%2C540%2C810" alt="" />
     </Wrap>
     <Wrap>
         <img src="https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg?region=0%2C0%2C540%2C810" alt="" />
     </Wrap>
     <Wrap>
         <img src="https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg?region=0%2C0%2C540%2C810"alt="" />
     </Wrap>
     <Wrap>
         <img src="https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg?region=0%2C0%2C540%2C810" alt="" />
     </Wrap>
     </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
margin-bottom: 20px;
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));

`
const Wrap = styled.div`
 border-radius: 10px;
 cursor: pointer;
 overflow: hidden;
 border: 3px solid rgba(249, 249, 249, 0.1);
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 / 72%) 0px 16px 10px -10px;
 transition all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


 img {
   width: 100%;
   height: 100%;
   object-fit: cover;
 }

&:hover {
  transform: scale(1.05);
  box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
  rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  border-color: rgba(249, 249, 249, 0.8);

}

`