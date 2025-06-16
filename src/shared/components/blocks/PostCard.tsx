import { Link } from '@tanstack/react-router'
import type { Post } from '../../types/post'
import { Card } from '../ui/card'

export interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="mb-4">
      {post.image && <img src={post.image} alt="" className="mb-2" />}
      <h2 className="text-xl font-bold">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.summary}</p>
      <div className="text-sm text-gray-500">
        <span>Created: {post.createdAt}</span> |{' '}
        <span>Updated: {post.updatedAt}</span>
      </div>
      <div>
        {post.tags.map((tag) => (
          <span key={tag} className="mr-2 text-blue-600">
            #{tag}
          </span>
        ))}
      </div>
    </Card>
  )
}
