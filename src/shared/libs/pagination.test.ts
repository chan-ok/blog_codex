import { describe, it, expect } from 'vitest'
import { generatePostIndex, getPostsByPage } from './pagination'

const makePosts = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${i + 1}`,
    createdAt: `2024-01-${(i + 1).toString().padStart(2, '0')}`,
  }))
}

describe('generatePostIndex', () => {
  it('returns empty array when no posts', () => {
    expect(generatePostIndex([])).toEqual([])
  })

  it('handles exactly perPage posts', () => {
    const posts = makePosts(10)
    const index = generatePostIndex(posts)
    expect(index.length).toBe(1)
    expect(index[0].length).toBe(10)
  })

  it('handles one more than perPage', () => {
    const posts = makePosts(11)
    const index = generatePostIndex(posts)
    expect(index.length).toBe(2)
    expect(index[1].length).toBe(1)
  })
})

describe('getPostsByPage', () => {
  it('returns empty when page < 1', () => {
    const posts = makePosts(5)
    expect(getPostsByPage(posts, 0)).toEqual([])
  })

  it('returns first page of sorted posts', () => {
    const posts = makePosts(3)
    const result = getPostsByPage(posts, 1, 2)
    expect(result.map(p => p.id)).toEqual(['3','2'])
  })

  it('returns remaining posts on last page', () => {
    const posts = makePosts(5)
    const result = getPostsByPage(posts, 3, 2)
    expect(result.map(p => p.id)).toEqual(['1'])
  })
})
