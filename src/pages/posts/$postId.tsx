import { useParams } from '@tanstack/react-router'
import { posts } from '../../shared/constants/posts'

export default function PostDetail() {
  const { postId } = useParams({ from: '/posts/$postId' })
  const post = posts.find((p) => p.id === postId)
  if (!post) return <div>Post not found</div>
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
