<template>
    <div id="app-classify">
        <van-row type="flex" justify="space-around">
            <van-col span="8" v-for='good in goods' :key='good.id'>
                <div class="name">{{good.name}}</div>
                <div class="price">{{good.price}}</div>
                <van-button round type="warning" @click="addCart()">加入购物车</van-button>
            </van-col>
        </van-row>
        <app-footer-nav></app-footer-nav>
    </div>
</template>

<script>
    export default {
        name:'AppClassify',
        data(){
            return {
                goods:[
                    {id:1,name:'ipnone6',price:2000},
                    {id:2,name:'华为',price:3000},
                    {id:3,name:'小米',price:1000}
                ]
            }
        },
        methods:{
            addCart(){
              this.goods.forEach(good => {
                  localStorage.name = JSON.stringify(good.name)
                  localStorage.price = JSON.stringify(good.price)
              });
            }
        }
    }
</script>
<style scoped>
/* @import url(); 引入css类 */
    .name{
        font-size:18px;
        line-height: 24px;
        margin: 20px 0;
        text-align: center;
    }
    .price{
        font-size:16px;
        line-height: 18px;
         margin-bottom: 20px;
         text-align: center;
    }
    .van-col{
        padding-left:5px;
    }
</style>