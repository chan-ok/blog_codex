import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import PostCard from './PostCard'
import type { Post } from '../../types/post'
import type { ReactNode } from 'react'

vi.mock('@tanstack/react-router', () => ({
  Link: (props: { children: ReactNode }) => <a>{props.children}</a>,
}))

describe('PostCard', () => {
  const post: Post = {
    id: '1',
    title: 'Test Post',
    summary: 'summary',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-02',
    tags: ['tag1'],
    content: 'content',
  }

  it('renders post information', () => {
    render(<PostCard post={post} />)
    expect(screen.getByText('Test Post')).toBeInTheDocument()
    expect(screen.getByText('summary')).toBeInTheDocument()
    expect(screen.getByText(/Created/)).toBeInTheDocument()
  })
})
