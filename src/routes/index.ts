import Home from '../pages/Home'
import Posts from '../pages/Posts'
import User from '../pages/User'

export const routes = [
  {
    id: 2,
    name: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    id: 2,
    name: 'Posts',
    path: '/posts',
    exact: false,
    component: Posts
  },
  {
    id: 3,
    name: 'User',
    path: '/user/:id',
    exact: false,
    component: User
  }
]
