import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatPrice } from '../lib/format'

function ProductCard({ product }) {
  const { handle, title, images, tags } = product
  const image = images.edges[0]?.node
  const price = formatPrice(product.priceRange.minVariantPrice.amount)

  return (
    <Link href={`/products/${handle}`}>
      <a className="group">
        <div className="relative w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
          <Image
            src={image.transformedSrc}
            alt={product.altText}
            className="object-cover object-center w-full h-full group-hover:opacity-75"
            layout="fill"
          />
        </div>
        <div className="flex justify-between mt-4">
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
