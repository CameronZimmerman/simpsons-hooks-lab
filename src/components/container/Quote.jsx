import React from 'react'
import PropTypes from 'prop-types'

function Quote({text, character, image}) {
  return (
    <div>
      <h1>{character}</h1>
      <img src={image} alt={character} />
      <p>quote: {text}</p>
    </div>
  )
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

}

export default Quote

