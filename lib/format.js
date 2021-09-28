export const formatPrice = (amount) => {
  return Intl.NumberFormat('en-CA', {
    currency: 'CAD',
    style: 'currency',
  }).format(amount)
}
