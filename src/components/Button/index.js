import React from 'react'
import PropTypes from 'prop-types'

import { Button as Btn } from './styles'

function Button({ text, icon, onClick, amount, ...rest }) {
  return (
    <Btn type="button" onClick={onClick} {...rest}>
      {icon && (
        <div>
          {icon}
          {amount || 0}
        </div>
      )}
      {text && <span>{text}</span>}
    </Btn>
  )
}

export default Button

Button.defaultProps = {
  text: '',
  icon: <></>,
  onClick: null,
  amount: 0
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  amount: PropTypes.number
}
