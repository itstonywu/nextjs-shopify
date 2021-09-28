import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products, label }) {
  return (
    <div className="py-16 sm:py-24">
      <h2 className="mb-4 text-2xl uppercase tracking-loose">{label}</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {products.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
