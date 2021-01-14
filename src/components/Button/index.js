import React from 'react'
import PropTypes from 'prop-types'

import { Button as Btn } from './styles'

function Button({ text, icon, onClick }) {
  return (
    <Btn type="button" onClick={onClick}>
      {icon && <div>{icon}</div>}
      {text && <span>{text}</span>}
    </Btn>
  )
}

export default Button

Button.defaultProps = {
  text: '',
  icon: <></>,
  onClick: null
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func
}
