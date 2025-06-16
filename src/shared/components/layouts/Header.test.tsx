import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { Header } from './Header'
import { vi } from 'vitest'

vi.mock('@tanstack/react-router', () => ({
  Link: (props: any) => <a>{props.children}</a>,
}))

describe('Header', () => {
  it('shows navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
