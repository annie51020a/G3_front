import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
      // meta:{
      //   title: '周邊商品',
      // }
    },
    { // 首頁_手做活動
      path: '/activity',
      name: 'activity',
      component: () => import('@/views/ActivityView.vue')
    },
    {// 活動詳細頁面
      path: '/activity/:id',
      name: 'activitydetail',
      component: () => import('@/views/ActivityDetail.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsView.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('@/views/QuizView.vue')
    },
    {//關於我們-品牌故事
      path: '/about/story',
      name: 'aboutstory',
      component: () => import('@/views/AboutStory.vue')
    },
    {
      path: '/memberdiscount',
      name: 'memberdiscount',
      component: () => import('@/views/MemberDiscount.vue')
    },
    { // 會員_個人資料
      path: '/memberinfo',
      name: 'memberinfo',
      component: () => import('@/views/MemberInfo.vue')
    },
    { // 會員_收藏清單
      path: '/memberfav',
      name: 'memberfav',
      component: () => import('@/views/MemberFav.vue')
    },
    { // 會員_商品購買紀錄
      path: '/memberbuy',
      name: 'memberbuy',
      component: () => import('@/views/MemberBuy.vue')
    },
    { // 會員_活動報名紀錄
      path: '/memberactivity',
      name: 'memberactivity',
      component: () => import('@/views/MemberActivity.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/checkout_act',
      name: 'checkout_act',
      component: () => import('@/views/CheckOut-Activity.vue')
    },
    { // 客製化油紙傘
      path: '/customized',
      name: 'customized',
      component: () => import('@/views/Customized.vue')
    },
    { // 404
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue')
    },
    {
      path: '/checkout_prod',
      name: 'checkout_prod',
      component: () => import('@/views/CheckOut-prod.vue')
    },
    {
      path: '/product/:id',
      name: 'singleproduct',
      component: () => import('@/views/SingleProductView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/checkout_self-prod',
      name: 'checkout_self-prod',
      component: () => import('@/views/CheckOut-self-prod.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 始终滚动到顶部
    return { top: 0 }
  }
})


router.beforeEach(async (to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
