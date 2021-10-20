<!--  -->
<template>
    <div id="app-async-show-num">
        appAsyncShowNum
        <button type="text" @click="asycnShowNum({num:1})">-</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name:'AppAsyncShowNum',
        methods:{
            ...mapActions(['asycnShowNum'])
        }
    }
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>