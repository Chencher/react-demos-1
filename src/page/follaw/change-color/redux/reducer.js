export const ACTION_CHANGE_COLOR = 'changeColor';

export default (state = {
    distColor: '#ccc'
}, action) => {
    let {
        type,
        data
    } = action;

    switch (type) {
        case ACTION_CHANGE_COLOR:
            return { ...state,
                distColor: data.distColor
            }

        default:
            return state;
    }
}