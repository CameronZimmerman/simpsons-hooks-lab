import React from 'react'
import PropTypes from 'prop-types'

export default Load = ({onClick}) => {
  return (
    <button onClick={onClick}>Fetch</button>
  )
}

Load.PropTypes = {
  onClick: PropTypes.func.isRequired
}

