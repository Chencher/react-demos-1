/**
 * reducer集合
 */

import changeColorReducer from '../../follaw/change-color/redux/reducer';
import clickAddNumReduceer from '../..//follaw/click/reducer';

import { combineReducers } from 'redux';

export default combineReducers({
    changeColor:changeColorReducer,
    numAdd:clickAddNumReduceer
})