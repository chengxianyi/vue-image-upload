import Vue from 'vue'
import Router from 'vue-router'
import uploadImg from '@/components/upload-img'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'uploadImg',
      component: uploadImg
    }
  ]
})
