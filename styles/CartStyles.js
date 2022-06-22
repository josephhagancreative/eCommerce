import styled from "styled-components"
const { motion } = require("framer-motion")

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`
export const CartStyle = styled(motion.div)`
  width: 50%;
  min-width: 30rem;
  background: #f1f1f1;
  padding: 2rem 2rem;
  overflow-y: scroll;
  position: relative;
`
export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: white;
  padding: 2rem;
  gap: 1rem;
  margin: 2rem 0;
  overflow: hidden;
  img {
    width: 8rem;
  }
`
export const CardInfo = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
`

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  overflow: hidden;
  h1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  svg {
    font-size: 8rem;
    color: var(--secondary);
  }
`
export const Checkout = styled(motion.div)`
  button {
    background-color: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    margin-top: 1rem;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
`
export const Cards = styled(motion.div)``
