import styled from "styled-components"

export const NavStyles = styled.nav`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  a {
    font-size: 1.2rem;
  }
`

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-top: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }
  svg {
    font-size: 1.25rem;
  }
  span {
    background-color: #e54343;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
    font-size: 0.75rem;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    right: -5%;
    top: -20%;
  }
`
