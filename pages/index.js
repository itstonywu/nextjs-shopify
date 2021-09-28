/* This example requires Tailwind CSS v2.0+ */
import Hero from '@/components/Hero'
import ProductList from '@/components/ProductList'
import { getAllProducts } from '@/lib/shopify'

export default function Home({ products }) {
  return (
    <>
      <Hero />
      <ProductList products={products} label="New Arrivals" />
    </>
  )
}

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: { products },
  }
}
