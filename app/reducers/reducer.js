import TYPES from '../types/type.js'

const initialState = {
    num: 0
}

function addNumberReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.PLUS_ONE:
            return {
                num: ++state.num
            }
            break;
        default:
            return initialState;
            break;
    }
}

export default addNumberReducer