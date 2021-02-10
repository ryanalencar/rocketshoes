import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import * as CartActions from '../../store/modules/cart/actions'

import Button from '../../components/Button'
import { Container, Total, ProductTable } from './styles'

function Cart({ cart, removeFromCart }) {
  const handleRemoveProduct = prodId => {
    removeFromCart(prodId)
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
                <span>{product.price}</span>
              </td>
              <td>
                <div>
                  <Button icon={<MdRemoveCircleOutline size={20} color="#7159C1" />} />
                  <input type="number" readOnly value={product.amount} />
                  <Button icon={<MdAddCircleOutline size={20} color="#7159C1" />} />
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <Button
                  icon={<MdDelete size={20} color="#7159C1" />}
                  onClick={() => handleRemoveProduct(product.id)}
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
          <strong>R$1920,25</strong>
        </Total>
      </footer>
    </Container>
  )
}

const mapStateToProps = state => ({ cart: state.cart })

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

Cart.defaultProps = {
  cart: [],
  removeFromCart: null
}

Cart.propTypes = {
  cart: PropTypes.instanceOf(Array),
  removeFromCart: PropTypes.func
}
