import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatPrice } from '../lib/format'

type ProductDetails = {
  handle: string
  title: string
  images?: any
  tags?: string[]
}

function ProductCard({ product }) {
  const { handle, title, images, tags }: ProductDetails = product
  const image = images.edges[0]?.node
  const price = formatPrice(product.priceRange.minVariantPrice.amount)

  return (
    <Link href={`/products/${handle}`}>
      <a className="group">
        <div className="w-full relative aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <Image
            src={image.transformedSrc}
            alt={product.altText}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
            layout="fill"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{tags[0]}</p>
          </div>
          <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
