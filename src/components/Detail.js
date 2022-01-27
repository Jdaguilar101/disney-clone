import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/61C377B14F25252D8A112D23A89A78516435DCF60F1C151854DE3D91C755A11A/scale?width=2880&aspectRatio=1.78&format=jpeg" alt="" />
      </Background>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`
const Background = styled.div`
   position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;

    }

`
