import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Home from 'components/home/home'
import ChannelView from 'components/channel-view/channel-view'
import ChannelPage from 'components/channel-page/channel-page'
import Video from 'components/video/video'
import Search from 'components/search/search'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: 'home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'channel/:index',
          component: ChannelView,
          children: [
            {
              path: ':sindex',
              component: ChannelPage
            }
          ]
        }
      ]
    },
    {
      name: 'video',
      path: '/video/:bvid',
      component: Video
    },
    {
      name: 'search',
      path: '/search',
      component: Search
    }
  ]
})
