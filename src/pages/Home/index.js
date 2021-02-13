import React, { useCallback, useEffect, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as CartActions from '../../store/modules/cart/actions'

import { formatPrice } from '../../util/format'
import { getProducts } from '../../services/product'
import { useIsMounted } from '../../components/commom/customHooks'
import Button from '../../components/Button'

import { ProductList } from './styles'

function Home({ addToCartRequest, amount }) {
  const [products, setProducts] = useState([])
  const isMounted = useIsMounted()

  const fetchData = useCallback(async () => {
    const response = await getProducts()
    const data = response.map(product => ({
      ...product,
      price: product.price
    }))
    if (isMounted && data) {
      setProducts(data)
    }
  }, [isMounted])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleAddProduct = id => {
    addToCartRequest(id)
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{formatPrice(product.price)}</span>

          <Button
            icon={<MdShoppingCart size={16} color="#FFF" />}
            text="ADICIONAR AO CARRINHO"
            amount={amount[product.id] || 0}
            onClick={() => handleAddProduct(product.id)}
          />
        </li>
      ))}
    </ProductList>
  )
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {})
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

Home.defaultProps = {
  addToCartRequest: null,
  amount: {}
}

Home.propTypes = {
  addToCartRequest: PropTypes.func,
  amount: PropTypes.object
}
