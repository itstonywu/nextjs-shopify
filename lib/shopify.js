export async function storeFront(query, variables = {}) {
  const options = {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token':
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESSTOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  }

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
      options
    )
    const data = response.json()
    return data
  } catch (error) {
    throw new Error('Error fetching products')
  }
}

const gql = String.raw

export async function getAllProducts() {
  const productsQuery = gql`
    query Products {
      products(first: 6) {
        edges {
          node {
            id
            title
            handle
            tags
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  `

  const { data } = await storeFront(productsQuery)
  const products = data?.products
  return products ? products.edges : []
}

export async function getAllProductHandles() {
  const productHandlesQuery = gql`
    {
      products(first: 6) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `

  const response = await storeFront(productHandlesQuery)
  return response
}

export async function getSingleProductByHandleAndRelatedProducts(handle) {
  const singleProductQuery = gql`
    query SingleProduct($handle: String!) {
      productByHandle(handle: $handle) {
        title
        description
        tags
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 1) {
          edges {
            node {
              transformedSrc
              altText
            }
          }
        }
        variants(first: 6) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
      products(first: 6) {
        edges {
          node {
            id
            title
            handle
            tags
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  `
  const { data } = await storeFront(singleProductQuery, handle)

  return data
}

export async function checkout(variantId) {
  console.log(variantId)
  // const checkoutMutation = gql`
  //   mutation CheckoutCreate($variantId: ID!) {
  //     checkoutCreate(
  //       input: { lineItems: { variantId: $variantId, quantity: 1 } }
  //     ) {
  //       checkout {
  //         webUrl
  //       }
  //     }
  //   }
  // `
  // const response = await storeFront(checkoutMutation, variantId)
  // return response
}
