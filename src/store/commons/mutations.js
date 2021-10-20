import { SHOW_NUM,REDUCE_NUM} from './const'


const mutations = {
    [SHOW_NUM](state,payload){
        state.num += payload.num
    },
    [REDUCE_NUM](state,payload){
        state.num -= payload.num
    }
}
export default mutations