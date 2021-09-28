import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatPrice } from '@/utils/index'

function ProductCard({ product }) {
  const { handle, title, images, tags } = product
  const image = images.edges[0]?.node
  const price = formatPrice(product.priceRange.minVariantPrice.amount)

  return (
    <Link href={`/products/${handle}`}>
      <a className="group">
        <div className="bg-gray-100 border border-gray-500">
          <div className="relative w-full overflow-hidden bg-gray-400 aspect-w-1 aspect-h-1 md:aspect-w-2 md:aspect-h-3">
            <Image
              src={image.transformedSrc}
              alt={image.altText ?? 'Product Image'}
              className="object-cover object-center w-full h-full group-hover:opacity-75"
              layout="fill"
            />
          </div>
          <div className="flex justify-between m-4">
            <div>
              <h3 className="mt-1 text-sm font-bold text-gray-700 uppercase">
                {title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 uppercase">{tags[0]}</p>
            </div>
            <p className="mt-1 text-sm text-gray-700">{price}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
