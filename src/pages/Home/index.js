import React, { useCallback, useEffect, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { formatPrice } from '../../util/format'
import { getProducts } from '../../services/product'
import { useIsMounted } from '../../components/commom/customHooks'
import Button from '../../components/Button'

import { ProductList } from './styles'

function Home({ dispatch }) {
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

  const handleAddProduct = product => {
    dispatch({
      type: 'ADD_TO_CART',
      product
    })
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.price}</span>

          <Button
            icon={<MdShoppingCart size={16} color="#FFF" />}
            text="ADICIONAR AO CARRINHO"
            onClick={() => handleAddProduct(product)}
          />
        </li>
      ))}
    </ProductList>
  )
}

export default connect()(Home)

Home.defaultProps = {
  dispatch: null
}

Home.propTypes = {
  dispatch: PropTypes.func
}
