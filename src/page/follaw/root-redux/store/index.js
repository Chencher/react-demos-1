import { createStore } from 'redux';
import reducers from '../reducer/index';


const store = createStore(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

export default store