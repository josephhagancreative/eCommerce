import { ProductStyle } from "../styles/ProductStyle"
import Link from "next/link"

function Product({ product }) {
  return (
    <ProductStyle>
      <Link href={`/product/${product.slug}`}>
        <img src={product.image.data.attributes.formats.small.url} alt="" />
      </Link>
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
    </ProductStyle>
  )
}

export default Product
