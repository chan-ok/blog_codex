import {
  RouterProvider,
  Route,
  RootRoute,
  createRouter,
} from '@tanstack/react-router'
import Layout from '../shared/components/layouts/Layout'
import Home from '../pages/home'
import About from '../pages/about'
import PostsPage from '../pages/posts'
import PostDetail from '../pages/posts/$postId'
import TagsPage from '../pages/tags'

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

const postsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/posts',
  component: PostsPage,
})

const postDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  component: PostDetail,
})

const tagsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/tags',
  component: TagsPage,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  postsRoute,
  postDetailRoute,
  tagsRoute,
])
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return <RouterProvider router={router} />
}
