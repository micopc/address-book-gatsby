import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

import logo from '../assets/logo.png'

const Container = styled.div`
  background-color: black;
  padding: 15px 0;
`

const Title = styled.h1`
  color: #fff;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #fff;
`

const Logo = styled.img`
  width: 120px;
`

const Header = () => (
  <Container>
    <Title>
      <StyledLink to="/">
        Address Book
        <Logo src={logo} alt="" />
      </StyledLink>
    </Title>
  </Container>
)

export default Header
