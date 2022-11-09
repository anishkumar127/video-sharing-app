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
const Texts = styled.div``;

const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color:${({theme})=> theme.text};
`;

const ChannelName = styled.h2`
font-size:14px;
color:${({theme})=> theme.textSoft};
margin: 9px 0px;
`;

const Info = styled.div`
font-size: 14px;
color:${({theme})=> theme.textSoft};
`;

const Card = () => {
  return (
    <Container>
        <Image src='https://i.ytimg.com/an_webp/FztSFtwobtM/mqdefault_6s.webp?du=3000&sqp=CKWFr5sG&rs=AOn4CLAMzCAbAKTIX--mtt7cbzIVVoFO6A'/>
        <Details>
        <ChannelImage/>
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Anish Kumar</ChannelName>
          <Info>4,859,834 views • 1 day ago</Info>
        </Texts>
        </Details>
    </Container>
  )
}

export default Card