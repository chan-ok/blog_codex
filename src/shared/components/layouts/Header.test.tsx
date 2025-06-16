import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { Header } from './Header'
import { ThemeProvider } from '../containers/theme-provider'
import { vi } from 'vitest'
import type { ReactNode } from 'react'

vi.mock('@tanstack/react-router', () => ({
  Link: (props: { children: ReactNode }) => <a>{props.children}</a>,
}))

describe('Header', () => {
  it('shows navigation links', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })
})
