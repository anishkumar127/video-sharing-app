import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 360px;
margin-bottom: 45px;
cursor: pointer;
`
const Image = styled.img`
  width: 100%;
  height:202px;
  background-color: #999;
` 
const Details = styled.div`
display:flex;
margin-top: 16px;
gap: 12px;
`
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`
const Card = () => {
  return (
    <Container>
        <Image src='https://i.ytimg.com/an_webp/FztSFtwobtM/mqdefault_6s.webp?du=3000&sqp=CKWFr5sG&rs=AOn4CLAMzCAbAKTIX--mtt7cbzIVVoFO6A'/>
        <Details>

        </Details>
    </Container>
  )
}

export default Card