import { useState } from 'react'
import PostCard from '../../shared/components/blocks/PostCard'
import { Button } from '../../shared/components/ui/button'
import { posts } from '../../shared/constants/posts'
import { getPostsByPage, generatePostIndex } from '../../shared/libs/pagination'

const PER_PAGE = 10
const postIndex = generatePostIndex(posts, PER_PAGE)

export default function PostsPage() {
  const [page, setPage] = useState(1)
  const pagedPosts = getPostsByPage(posts, page, PER_PAGE)
  const totalPages = postIndex.length

  return (
    <div>
      {pagedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div className="mt-4 flex justify-center space-x-2">
        <Button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Prev
        </Button>
        <span>
          {page} / {totalPages || 1}
        </span>
        <Button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>
          Next
        </Button>
      </div>
    </div>
  )
}
