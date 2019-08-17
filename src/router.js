import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import AddPost from './views/AddPost.vue'
import Notification from './views/Notification.vue'
import TagList from './views/TagList.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '홈',
        needAuth: true
      }
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login,
      meta: {
        title: '로그인',
        forbidAuth: true
      }
    },
    {
      path: '/post/new',
      name: 'addPost',
      component: AddPost,
      meta: {
        title: '새 글 등록',
        needAuth: true
      }
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification,
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
      path: '/tag/all',
      name: 'tagList',
      component: TagList,
      meta: {
        title: '전체 태그 보기',
        needAuth: true
      }
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "notFound" */ './views/NotFound.vue'),
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
