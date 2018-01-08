import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cat from '@/components/cat';
import dog from '@/components/dog';
import pig from '@/components/pig';
import test1 from '@/components/test1';
import test2 from '@/components/test2';
import test3 from '@/components/test3';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'root'
      }
    },
    {
      path: '/cat/:id',
      name: 'cat',
      component: cat,
      meta: {
        title: 'cat'
      },
      children: [
        {
          path: 'test1',
          name: 'test1',
          component: test1
        },
        {
          path: 'test2',
          name: 'test2',
          component: test2,
          meta: {
            title: 'test2'
          }
        },{
          path: 'test3',
          name: 'test3',
          component: test3,
          meta: {
            title: 'test2'
          }
        },
      ]
    },
    {
      path: '/dog',
      name: 'dog',
      component: dog,
      children: [
        {
          path: 'x',
          name: 'x',
          components: {
            default: test1,
            a: test2,
            b: test3
          },
          beforeEnter: (to, from, next) => {
            console.log(to)
            console.log(from)
            next()
          }
        },{
          path: 'y',
          name: 'y',
          components: {
            default: dog,
            a: cat,
            b: pig
          }
        }

      ],
    },
    {
      path: '/pig',
      name: 'pig',
      component: pig
    },
    {
      path: '/pig/sd',
      redirect: {
        name: 'pig'
      }
    }
  ]
})
