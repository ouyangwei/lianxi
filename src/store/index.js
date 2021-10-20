import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './commons'


Vue.use(Vuex)


const store = new Vuex.Store({
    modules:{
        commons:moduleA
    }
})

export default store