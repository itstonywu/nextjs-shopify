/* This example requires Tailwind CSS v2.0+ */
import Hero from '../components/Hero'
import ProductList from '../components/ProductList'
import { storeFront } from '../lib/shopify'

export default function Home({ products }) {
  return (
    <div>
      <Hero />
      <ProductList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await storeFront(productsQuery)

  return {
    props: {
      products: data.products,
    },
  }
}

const gql = String.raw

const productsQuery = gql`
  query Products {
    products(first: 6) {
      edges {
        node {
          id
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`
