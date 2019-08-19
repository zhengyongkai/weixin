import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/page/register/register';
import Top from '@/components/tab/top';
import Chat from '@/page/chat/chat';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },{
      path: '/top',
      name: 'top',
      component: Top

    },{
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})
