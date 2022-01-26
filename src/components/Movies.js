import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
    <h4>Recommended for you </h4>
    <Content>
     <Wrap>
         <img src="https://lumiere-a.akamaihd.net/v1/images/minihero-encanto1_33953f85.jpeg?region=0,0,600,690" alt="minihero" />
     </Wrap>
     
     </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
diplay: grid;
gri-gap: 25px;
grid-template-columns: repeat(4, minimax(0,1fr));

`
const Wrap = styled.div`

`