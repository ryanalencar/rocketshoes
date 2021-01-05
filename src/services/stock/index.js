import api from '../api'

export async function getStock() {
  const stock = await api.get('/stock')
  return stock && stock.data
}
