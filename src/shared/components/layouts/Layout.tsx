import { Outlet } from '@tanstack/react-router'
import { Header } from './Header'
import { Footer } from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
