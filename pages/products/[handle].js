import {
  getSingleProductByHandleAndRelatedProducts,
  getAllProductHandles,
} from '@/lib/shopify'
import ProductList from '@/components/Product/ProductList'
import ProductForm from '@/components/Product/ProductForm'

export default function ProductPage({ productByHandle, products }) {
  const relatedProducts = products.filter(
    ({ node: product }) => product.handle !== productByHandle.handle
  )

  return (
    <>
      <ProductForm product={productByHandle} />
      <ProductList products={relatedProducts} label="Related products" />
    </>
  )
}

export async function getStaticPaths() {
  const products = await getAllProductHandles()

  return {
    paths: products.map(({ node: product }) => ({
      params: {
        handle: product.handle,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { productByHandle, products } =
    await getSingleProductByHandleAndRelatedProducts({
      handle: params.handle,
    })

  return {
    props: {
      productByHandle,
      products,
    },
    revalidate: 5,
  }
}
