import {IncrementAdd,increment} from '../action';
export default (state={},action={})=>{
    console.log('state',state);
    console.log('action', action);

    switch (action.type) {
        case IncrementAdd:
            return {...state,count:state.count+1}    
        default:
            return state;
    }
}