<template>
  <div id="app">
      <!-- {{ num }}
      {{ doubleNum }}
      <app-show-num></app-show-num>
      <app-async-show-num></app-async-show-num>
      <AppHelloWord/> -->
      <router-view></router-view>
  </div>
</template>

<script>
// import { mapState,mapGetters} from 'vuex'
// import AppShowNum from './components/showNum.vue'
// import AppAsyncShowNum from './components/asyncShowNum.vue'
// import AppHelloWord from './components/HelloWorld.vue'
export default {
  name: 'App',
  // components:{
  //   AppShowNum,
  //   AppAsyncShowNum,
  //   AppHelloWord
  // },
  // computed:{
  //   ...mapState({
  //     num:state=>state.commons.num
  //   }),
  //   ...mapGetters({
  //     doubleNum:'doubleNum'
  //   })
  // }
 
}
</script>

<style>

</style>
