import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'newsfeed',
      component: () => import('./views/Newsfeed.vue'),
      meta: {
        title: '뉴스피드',
        needAuth: true
      }
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        title: '로그인',
        forbidAuth: true
      }
    },
    {
      path: '/post/new',
      name: 'addPost',
      component: () => import('./views/AddPost.vue'),
      meta: {
        title: '새 글 등록',
        needAuth: true
      }
    },
    {
      path: '/tag/all',
      name: 'tagList',
      component: () => import('./views/TagList.vue'),
      meta: {
        title: '전체 태그 보기',
        needAuth: true
      }
    },
    {
      path: '/notification',
      name: 'notification',
      component: () => import(/* webpackChunkName: "notification" */ './views/Notification.vue'),
      meta: {
        title: '알림 모아보기',
        needAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
      meta: {
        title: '프로필 관리',
        needAuth: true
      }
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "not-found" */ './views/NotFound.vue'),
      meta: {
        title: 'Not Found'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.needAuth && !store.getters.isAuth) {
    next('/auth/login')
  } else if (to.meta.forbidAuth && store.getters.isAuth) {
    next('/')
  } else {
    if (to.meta.title) {
      document.title = `ECHO - ${to.meta.title}`
    } else {
      document.title = 'ECHO'
    }
    next()
  }
})

export default router
