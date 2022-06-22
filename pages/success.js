import { useRouter } from "next/router"
import Image from "next/image"
import pocari from "../public/pocari.png"
import styled from "styled-components"
const { motion } = require("framer-motion")

const stripe = require("stripe")(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  )
  return { props: { order } }
}

export default function Success({ order }) {
  const route = useRouter()
  // console.log(order)
  return (
    <Wrapper>
      <Card
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.75 }}>
        <h1>Thank you for your order</h1>
        <h2>A confirmation email has been sent to:</h2>
        <h2>{order.customer_details.email}</h2>
        <InfoWrapper>
          <Address>
            <h3>Address</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p key={key}>
                  {key} : {val}
                </p>
              )
            )}
          </Address>
          <Products>
            <h3>Products</h3>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price.unit_amount}</p>
              </div>
            ))}
          </Products>
        </InfoWrapper>
        <button onClick={() => route.push("/")}>Continue Shopping</button>
        <Image src={pocari} alt="pocari sweat" responsive="true" />
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 3rem 5rem;
`
const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem 3rem;
  h2 {
    margin: 1rem 0;
  }
  button {
    color: white;
    background-color: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    cursor: pointer;
    margin-bottom: 1rem;
  }
`
const Address = styled.div`
  font-size: 1rem;
  width: 100%;
`
const Products = styled.div`
  font-size: 1rem;
  width: 100%;
  div {
    padding-bottom: 1rem;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
`
