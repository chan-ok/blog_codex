import {
  RouterProvider,
  Route,
  RootRoute,
  Outlet,
  createRouter,
} from '@tanstack/react-router'
import Layout from '../shared/components/layouts/Layout'
import Home from '../pages/home'
import About from '../pages/about'

const rootRoute = new RootRoute({
  component: Layout,
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return <RouterProvider router={router} />
}
