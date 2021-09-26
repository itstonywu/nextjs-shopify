module.exports = {
  reactStrictMode: true,
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
  images: {
    domains: ['cdn.shopify.com', 'tailwindui.com', 'images.unsplash.com'],
  },
};
