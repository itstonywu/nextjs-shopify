import { NextSeo } from 'next-seo'
import { getAllProducts } from '@/lib/shopify'
import Hero from '@/components/Hero'
import ProductList from '@/components/Product/ProductList'

export default function Home({ products }) {
  return (
    <>
      <NextSeo
        title="Big T's Co."
        description="A sustainable tee-shirt company. Built with Next.js and Shopify by Tony Wu."
      />
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
