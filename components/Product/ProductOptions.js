import React from 'react'
import { RadioGroup } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ProductOptions({ selectedSize, setSelectedSize, sizes }) {
  return (
    <RadioGroup
      value={selectedSize}
      onChange={setSelectedSize}
      className="mt-4"
    >
      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
        {sizes.edges.map(({ node: product }, index) => (
          <RadioGroup.Option
            key={`${product.id}-${index}`}
            value={product}
            disabled={!product.availableForSale}
            className={({ active }) =>
              classNames(
                product.availableForSale
                  ? 'bg-white text-gray-900 cursor-pointer'
                  : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                active ? 'ring-2 ring-gray-800' : '',
                'group relative border py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <RadioGroup.Label as="p">{product.title}</RadioGroup.Label>
                {product.availableForSale ? (
                  <div
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-gray-800' : 'border-transparent',
                      'absolute -inset-px pointer-events-none'
                    )}
                    aria-hidden="true"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      stroke="currentColor"
                    >
                      <line
                        x1={0}
                        y1={100}
                        x2={100}
                        y2={0}
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                )}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}

export default ProductOptions
