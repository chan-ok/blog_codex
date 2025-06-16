import { useState } from 'react'
import PostCard from '../../shared/components/blocks/PostCard'
import { posts } from '../../shared/constants/posts'

export default function TagsPage() {
  const [selected, setSelected] = useState<string[]>([])
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags)))
  const filtered =
    selected.length === 0
      ? posts
      : posts.filter((p) => selected.every((t) => p.tags.includes(t)))

  const toggle = (tag: string) => {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  return (
    <div>
      <div className="mb-4">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggle(tag)}
            className={`mr-2 ${selected.includes(tag) ? 'font-bold' : ''}`}
          >
            {tag} ({posts.filter((p) => p.tags.includes(tag)).length})
          </button>
        ))}
      </div>
      {filtered.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
