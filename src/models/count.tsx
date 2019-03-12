export default {
    namespace: 'count',
    state: {
        num:0,
    },
    reducers:{
        add(state){
             state.num ++;
             return {...state}
        },
        reduce(state,){
            state.num --;
            return {...state}
        }
    }
}