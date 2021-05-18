import React, { useState } from 'react'
import fetchQuote from '../../services/fetchQuote'
import Load from '../container/Load'
import Quote from '../container/Quote'

export default function SimpsonsQuote() {
  const [quote, setQuote] = useState({character: '', text: '', image: ''})
  const [loaded, setLoaded] = useState(false)

  const handleClick = async () => {
    setLoaded(true)
    const quote = await fetchQuote()
    setQuote(quote)
  }
  return (
    <div>
      <Load onClick={handleClick}></Load>
      {loaded && <Quote {...quote}></Quote> }
    </div>
  )
}
