import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'

import * as CartActions from '../../store/modules/cart/actions'

import Button from '../../components/Button'
import { Container, Total, ProductTable } from './styles'
import { formatPrice } from '../../util/format'

function Cart({ cart, removeFromCart, updateAmount, total }) {
  const increment = product => {
    const { id, amount } = product
    updateAmount(id, amount + 1)
  }

  const decrement = product => {
    const { id, amount } = product
    updateAmount(id, amount - 1)
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={`tr-${product.id}`}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{formatPrice(product.price)}</span>
              </td>
              <td>
                <div>
                  <Button
                    onClick={() => decrement(product)}
                    icon={<MdRemoveCircleOutline size={20} color="#7159C1" />}
                  />
                  <input type="number" readOnly value={product.amount} />
                  <Button
                    onClick={() => increment(product)}
                    icon={<MdAddCircleOutline size={20} color="#7159C1" />}
                  />
                </div>
              </td>
              <td>
                <strong>{formatPrice(product.subtotal)}</strong>
              </td>
              <td>
                <Button
                  icon={<MdDelete size={20} color="#7159C1" />}
                  onClick={() => removeFromCart(product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <Button text="Finalizar Pedido" />

        <Total>
          <span>TOTAL</span>
          <strong>{formatPrice(total)}</strong>
        </Total>
      </footer>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: product.price * product.amount
  })),
  total: state.cart.reduce(
    (total, product) => total + product.price * product.amount,
    0
  )
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

Cart.defaultProps = {
  cart: [],
  removeFromCart: () => {},
  updateAmount: () => {},
  total: 0
}

Cart.propTypes = {
  cart: PropTypes.instanceOf(Array),
  removeFromCart: PropTypes.func,
  updateAmount: PropTypes.func,
  total: PropTypes.number
}
