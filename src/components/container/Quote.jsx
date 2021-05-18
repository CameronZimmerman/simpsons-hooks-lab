import React from 'react'
import PropTypes from 'prop-types'

function Quote({text, character, image}) {
  return (
    <div>
      <h1>{character}</h1>
      <image src={image} alt={character}></image>
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

