import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let routes = [
    {
        path:'/',
        name:'home',
        component:()=>import('../components/Home/Home.vue')
    },
    {
        path:'/classify',
        name:'classify',
        component:()=>import('../components/Classify/Classify.vue')
    },
    {
        path:'/cart',
        name:'cart',
        component:()=>import('../components/Cart/Cart.vue')
    },
    {
        path:'/mine',
        name:'mine',
        component:()=>import('../components/Mine/Mine.vue')
    },
    {
        path:'*',
        redirect:'/'
    }
]





const router = new VueRouter({
    mode:'history',
    routes
})

export default router