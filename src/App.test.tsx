import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the homepage with main heading', () => {
    render(<App />)
    const heading = screen.getByText(/Democratizing High-Performance Analytics/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders the navigation with contact button', () => {
    render(<App />)
    const contactButton = screen.getByRole('button', { name: /contact us via email/i })
    expect(contactButton).toBeInTheDocument()
  })

  it('renders the feature cards', () => {
    render(<App />)
    expect(screen.getByText(/Instant OLAP Cubes/i)).toBeInTheDocument()
    expect(screen.getByText(/AI-Powered Insights/i)).toBeInTheDocument()
    expect(screen.getByText(/Flexible Access/i)).toBeInTheDocument()
  })

  it('renders the about section with team members', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Arthur Jin/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Chris Antico/i })).toBeInTheDocument()
  })
})