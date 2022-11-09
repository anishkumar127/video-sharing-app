import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react'
import styled from 'styled-components';
const Container =styled.div`
position: sticky;
top:0;
background-color: ${({theme})=> theme.bgLighter};
height: 56px;
`

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content: flex-end;
padding: 0px 20px;
`
const Search = styled.div``

const Input = styled.input``

const Button = styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
margin-top:10px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon/>
        </Search>
        <Button>
        <AccountCircleOutlined/>
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar