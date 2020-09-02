import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px 10% 10% 10%;
  h1 {
    color: ${props => props.theme.colors.primary};
  }
`
