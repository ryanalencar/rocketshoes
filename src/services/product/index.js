import api from '../api'

export async function getProducts() {
  const products = await api.get('/products')
  return products && products.data
}
