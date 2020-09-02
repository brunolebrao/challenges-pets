import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: ${props => props.theme.colors.secondary};
  position: fixed;
  top: 0;
  width: 100%;
  transition: all 0.4s ease;
  height: 80px;
  z-index: 888;
  align-items: center;
  box-shadow: 0px 3px 16px 3px rgba(0, 0, 0, 0.28);
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 40px;
  img {
    width: 80px;
    max-width: 110px;
  }
`
