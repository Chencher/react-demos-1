



export const IncrementAdd = 'add';
export const increment = (data = {}) => ({ type: IncrementAdd, data });

export default (state = { count: 100 }, action = {}) => {
    switch (action.type) {
        case IncrementAdd:
            return { ...state, count: state.count + 1 }
        default:
            return state;
    }
}