import { getAllProducts } from '@/lib/shopify'
import Hero from '@/components/Hero'
import ProductList from '@/components/Product/ProductList'

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
