export default async function fetchQuote() {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
  const [{quote, character, image}] = await res.json()

  return {
    text: quote,
    character,
    image
  }
}