import React from 'react'
import Image from 'next/image'
import { formatPrice, getAllVariantOptions } from '@/utils/index'
import { useState } from 'react'
import Button from '@/components/Button'
import Spinner from '@/components/Spinner'
import ProductOptions from './ProductOptions'
import { checkout } from '@/lib/shopify'

function ProductForm({ product }) {
  const [isLoading, setIsLoading] = useState(false)

  const { title, images, description } = product
  const image = images.edges[0]?.node

  const allVariantOptions = getAllVariantOptions(product)

  const [selectedVariant, setSelectedVariant] = useState(null)

  async function onCheckout() {
    setIsLoading(true)
    const { data } = await checkout(selectedVariant.id)
    const { webUrl } = data.checkoutCreate.checkout
    window.location.href = webUrl
  }

  // const onCheckout = () => console.log('clicked')

  return (
    <div className="lg:grid lg:grid-cols-6 lg:gap-x-8 xl:gap-x-16">
      <div className="lg:col-span-3">
        <div className="overflow-hidden bg-gray-100 aspect-w-1 aspect-h-1">
          <Image
            src={image.transformedSrc}
            className="object-cover object-center"
            alt=""
            layout="fill"
          />
        </div>
      </div>
      <div className="mt-14 sm:mt-16 lg:mt-0 lg:col-span-3">
        <div className="flex flex-col-reverse">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-loose sm:text-3xl">
              {title}
            </h1>
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>
            <p className="mt-4 text-3xl text-gray-900">
              {formatPrice(product.priceRange.minVariantPrice.amount)}
            </p>
          </div>
        </div>
        <p className="mt-6 text-gray-500">{description}</p>
        <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-4">
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-400"
              >
                Size guide
              </a>
            </div>
            <ProductOptions
              selectedSize={selectedVariant}
              setSelectedSize={setSelectedVariant}
              sizes={allVariantOptions}
            />
          </div>
        </div>
        <Button onClick={onCheckout} selectedVariant={selectedVariant}>
          {isLoading && <Spinner />}
          Buy now
        </Button>
      </div>
    </div>
  )
}

export default ProductForm
