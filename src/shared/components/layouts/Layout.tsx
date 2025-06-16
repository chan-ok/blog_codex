import { Outlet } from '@tanstack/react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { ThemeProvider } from '../containers/theme-provider'

export default function Layout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
