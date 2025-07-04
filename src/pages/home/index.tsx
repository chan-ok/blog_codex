import PostCard from '../../shared/components/blocks/PostCard'
import { posts } from '../../shared/constants/posts'

export default function Home() {
  const latest = [...posts].sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt),
  ).slice(0, 5)
  return (
    <div>
      {latest.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
