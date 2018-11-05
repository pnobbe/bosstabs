import Vue from 'vue'
import Router from 'vue-router'
import Classes from '@/components/Classes'
import Tab from '@/components/Tab'
import corpTable from '@/assets/loottables/corp.json'
import kqTable from '@/assets/loottables/kq.json'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Classes',
      component: Classes
    },
    {
      path: '/corp',
      name: 'Corp',
      component: Tab,
      props: {
        name: 'Corporeal Beast',
        loottable: corpTable
      }
    },
    {
      path: '/kq',
      name: 'KQ',
      component: Tab,
      props: {
        name: 'Kalphite Queen',
        loottable: kqTable
      }
    }
  ]
})
