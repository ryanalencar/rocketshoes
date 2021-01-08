import React from 'react'
import PropTypes from 'prop-types'

import { Button as Btn } from './styles'

function Button({ text, icon }) {
  return (
    <Btn type="button">
      {icon && <div>{icon}</div>}
      {text && <span>{text}</span>}
    </Btn>
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
