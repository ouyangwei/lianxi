<!--  -->
<template>
    <div id="app-show-num">
        appshownum
        <button @click='SHOW_NUM({num:2})'>+</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    // import store from '../store'
    export default {
        name:'AppShowNum',
        methods:{
        //    clickNum(){
        //        store.commit({
        //            type:'SHOW_NUM',
        //            num:2
        //        })
        //    }
            ...mapMutations(['SHOW_NUM'])
        }
    }
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>