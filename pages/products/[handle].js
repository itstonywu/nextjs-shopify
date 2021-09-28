import {
  getSingleProductByHandleAndRelatedProducts,
  getAllProductHandles,
} from '@/lib/shopify'

import ProductList from '@/components/Product/ProductList'
import ProductForm from '@/components/Product/ProductForm'

export default function ProductPage({ productByHandle, products }) {
  return (
    <div>
      <ProductForm product={productByHandle} />
      <ProductList products={products} label="Related products" />
    </div>
  )
}

export async function getStaticPaths() {
  const products = await getAllProductHandles()

  return {
    paths: products.map((product) => ({
      params: {
        handle: product.node.handle,
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
  }
}
