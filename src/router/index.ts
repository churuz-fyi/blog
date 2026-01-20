import { createMemoryHistory, createRouter } from 'vue-router'

import Blog from '../views/Blog.vue'
import Home from '../views/Home.vue'

const routes = [
      { path: '/', name: Home, component: Home },
      { path: '/blog', name: Blog, component: Blog },
]

const router = createRouter({
      history: createMemoryHistory(),
      routes,
})

export default router
