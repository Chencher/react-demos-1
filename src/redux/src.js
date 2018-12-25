//redux 模拟源码 可以参考下
let createStore = (reducer) => {
    let state;
    //获取状态对象
    //存放所有的监听函数
    let listeners = [];
    let getState = () => state;
    //提供一个方法供外部调用派发action
    let dispath = (action) => {
        //调用管理员reducer得到新的state
        state = reducer(state, action);
        //执行所有的监听函数
        listeners.forEach((l) => l())
    }
    //订阅状态变化事件，当状态改变发生之后执行监听函数
    let subscribe = (listener) => {
        listeners.push(listener);
    }
    dispath();
    return {
        getState,
        dispath,
        subscribe
    }
}
let combineReducers = (renducers) => {
    //传入一个renducers管理组，返回的是一个renducer
    return function (state = {}, action = {}) {
        let newState = {};
        for (var attr in renducers) {
            newState[attr] = renducers[attr](state[attr], action)

        }
        return newState;
    }
}
export { createStore, combineReducers };

// 作者：该用户太帅没有设置昵称
// 链接：https://www.jianshu.com/p/e984206553c2
// 來源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。