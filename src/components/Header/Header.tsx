import React from 'react'
import dev from '../../assets/logo.png'
import { Container, Logo } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={dev} alt="Logo Pets" />
      </Logo>
    </Container>
  )
}

export default Header
