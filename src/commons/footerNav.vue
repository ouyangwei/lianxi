<template>
    <div id="app-footer-nav">
     <van-tabbar route>
        <van-tabbar-item replace  :to="route.path" :icon="route.icon" v-for='route in routes' :key='route.id'>{{route.title}}</van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
    export default {
        name:'AppFooterNav',
        data() {
            return {
                routes:[
                    {path:'/',name:'home',title:'首页',icon:'wap-home-o',id:'首页'},
                    {path:'/classify',name:'classify',title:'分类',icon:'search',id:'分类'},
                    {path:'/cart',name:'cart',title:'购物车',icon:'cart-o',id:'购物车'},
                    {path:'/mine',name:'mine',title:'我的',icon:'user-circle-o',id:'我的'},
                ]
            }
        }
    }
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>