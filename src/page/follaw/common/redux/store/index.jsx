import {createStore} from 'redux';
import reducer from '../reducer';

const store = createStore(reducer,{
    count:100
});

export default store