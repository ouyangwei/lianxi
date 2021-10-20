const actions = {
    asycnShowNum(context,payload){
        setTimeout(()=>{
            context.commit({
                type:'REDUCE_NUM',
                num:payload.num
            })
        },3000)
    }
}

export default actions