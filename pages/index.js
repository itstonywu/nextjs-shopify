/* This example requires Tailwind CSS v2.0+ */
import Hero from '@/components/Hero'
import ProductList from '@/components/ProductList'
import { getAllProducts } from '@/lib/shopify'

export default function Home({ products }) {
  return (
    <>
      <Hero />
      <ProductList products={products} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await getAllProducts()

  return {
    props: {
      products: data.products,
    },
  }
}
