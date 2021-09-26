export const formatPrice = (amount: number): string => {
  return Intl.NumberFormat('en-CA', {
    currency: 'CAD',
    style: 'currency',
  }).format(amount)
}
