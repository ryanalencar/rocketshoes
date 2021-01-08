import React from 'react'
import PropTypes from 'prop-types'

// import { Container } from './styles';

function Button({ text, icon }) {
  return (
    <button type="button">
      {icon && <div>{icon}</div>}
      {text && <span>{text}</span>}
    </button>
  )
}

export default Button

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element
}

Button.defaultProps = {
  text: '',
  icon: <></>
}
