import PostCard from '../../shared/components/blocks/PostCard'
import { posts } from '../../shared/constants/posts'

export default function PostsPage() {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
