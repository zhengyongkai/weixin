import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/page/register/register';
import Top from '@/components/tab/top';
import Chat from '@/page/chat/chat';
import ChatMessage from '@/page/chat/chatmessage/chatmessage';
import Address  from '@/page/address/address';
import Find from '@/page/find/find';
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
      component: Chat,
      children: [
				{
					path: '/chat/chatmessage',
					component: ChatMessage,
				}
			]

    },
    {
      path: '/address',
      component: Address,
      name:"通讯录"
      

    },
    {
      path: '/find',
      component: Find,
      name:"发现"
      

    }
  ]
})
