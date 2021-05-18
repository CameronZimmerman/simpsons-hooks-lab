import React, { useState } from 'react'
import Load from '../container/Load'
import Quote from '../container/Quote'

export default function SimpsonsQuote() {
  const [quote, setQuote] = useState({})
  const [loaded, setLoaded] = useState(false)

  const handleClick = () => {
    setLoaded(true)
  }
  return (
    <div>
      <Load></Load>
      <Quote></Quote>
    </div>
  )
}
