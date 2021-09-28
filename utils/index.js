export const formatPrice = (amount) => {
  return Intl.NumberFormat('en-CA', {
    currency: 'CAD',
    style: 'currency',
  }).format(amount)
}

export const getAllVariantOptions = (product) => {
  const { variants } = product
  variants.edges?.map((variant) => {
    const allOptions = {}

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value
    })

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantIsAvailable: variant.node.isAvailable,
      variantQuantity: 1,
    }
  })
  return variants
}
