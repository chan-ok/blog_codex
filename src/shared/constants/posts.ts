import type { Post } from '../types/post'

export const posts: Post[] = [
  {
    id: '1',
    title: 'First Post',
    summary: 'This is the first mock post.',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-02',
    tags: ['intro', 'welcome'],
    content: 'Content of the first post.',
  },
  {
    id: '2',
    title: 'Second Post',
    summary: 'This is the second mock post.',
    createdAt: '2024-02-01',
    updatedAt: '2024-02-03',
    tags: ['update'],
    content: 'Content of the second post.',
  },
  {
    id: '3',
    title: 'Third Post',
    summary: 'This is the third mock post.',
    createdAt: '2024-03-01',
    updatedAt: '2024-03-02',
    tags: ['news'],
    content: 'Content of the third post.',
  },
  {
    id: '4',
    title: 'Fourth Post',
    summary: 'This is the fourth mock post.',
    createdAt: '2024-04-01',
    updatedAt: '2024-04-02',
    tags: ['news'],
    content: 'Content of the fourth post.',
  },
  {
    id: '5',
    title: 'Fifth Post',
    summary: 'This is the fifth mock post.',
    createdAt: '2024-05-01',
    updatedAt: '2024-05-02',
    tags: ['update'],
    content: 'Content of the fifth post.',
  },
]
