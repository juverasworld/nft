import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
width:100vw;
background-color:${props=>props.theme.body};
`

const Navbar = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
width:85%;
height:${props=>props.theme.navHeight};
margin:0 auto;

`
const Nav = () => {
  return (
    <div>
        <Section>
       <Navbar>
        <h2>Logo</h2>
        <h2>Menu</h2>
        <h2>Buttons</h2>
        </Navbar>   
        </Section>
    </div>
  )
}

export default Nav