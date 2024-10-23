import React from 'react'

import './button.scss'

function Button({type = 'button', onClick, children}) {
  return (
    <button type={type} onClick={onClick}>{children}</button>
  )
}

export default Button