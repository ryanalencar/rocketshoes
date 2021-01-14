import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Container, Cart } from './styles'
import logo from '../../assets/images/logo.svg'

function Header({ cartAmount }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartAmount} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}

export default connect(state => ({
  cartAmount: state.cart.length
}))(Header)

Header.defaultProps = {
  cartAmount: 0
}

Header.propTypes = {
  cartAmount: PropTypes.number
}
