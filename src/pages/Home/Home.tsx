import React from 'react'
import { Container } from './styles'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <main>
      <>
        <Container>
          <h1>Bem vindos(as) a Pets</h1>
          <Link to="/posts">
            <Button>Ver os Cards</Button>
          </Link>
        </Container>
      </>
    </main>
  )
}
export default Home
