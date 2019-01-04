//使用demo
function createStore(reducer) {
    var state;
    var listeners = [];
    var getState = () => state;
    var dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(l => l());
    }
    var subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l != listener)
        }
    }
    dispatch();
    return {
        getState, dispatch, subscribe
    }
}
var reducer = (state = 0, action) => {
    if (!action) return state;
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
var store = createStore(reducer);
store.subscribe(function () {
    document.querySelector('#counter').innerHTML = store.getState();
});

document.querySelector('#addBtn').addEventListener('click', function () {
    store.dispatch({ type: 'INCREMENT' });
});
document.querySelector('#minusBtn').addEventListener('click', function () {
    store.dispatch({ type: 'DECREMENT' });
});

// 作者：该用户太帅没有设置昵称
// 链接：https://www.jianshu.com/p/e984206553c2
// 來源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。