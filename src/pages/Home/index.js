import React, { useCallback, useEffect, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'

import { formatPrice } from '../../util/format'
import { getProducts } from '../../services/product'
import { useIsMounted } from '../../components/commom/customHooks'

import { ProductList } from './styles'

export default function Home() {
  const isMounted = useIsMounted()
  const [products, setProducts] = useState([])

  const fetchData = useCallback(async () => {
    const response = await getProducts()
    const data = response.map(product => ({
      ...product,
      price: formatPrice(product.price)
    }))
    if (isMounted && data) {
      setProducts(data)
    }
  }, [isMounted])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.price}</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}
