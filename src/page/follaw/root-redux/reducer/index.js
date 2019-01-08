/**
 * reducer集合
 */

import changeColorReducer from '../../change-color/redux/reducer';
import clickAddNumReduceer from '../../click/reducer';

import { combineReducers } from 'redux';

export default combineReducers({
    changeColor:changeColorReducer,
    numAdd:clickAddNumReduceer
})