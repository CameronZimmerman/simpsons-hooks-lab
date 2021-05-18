import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import SimpsonsQuote from './SimpsonsQuote'

describe('SimpsonsQuote component', () => {
  const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
      return res(
        ctx.json([
          {
            "quote": "But my mom says I'm cool.",
            "character": "Milhouse Van Houten",
            "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
            "characterDirection": "Right"
          }
        ])
      )
    })
  )

  beforeAll(() => server.start)
  afterAll(() => server.stop)

  it('displays a quote on button press', async () => {
    render(<SimpsonsQuote />)
    expect(screen.queryByText("But my mom says I'm cool.")).toBe(null)
    const loadButton = screen.getByRole('button')

    fireEvent.click(loadButton)

    await waitFor(() => {
     screen.getByText("But my mom says I'm cool.")
    })
  })
})
