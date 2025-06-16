import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="p-4 shadow">
      <h1>Blog Codex</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </header>
  )
}
