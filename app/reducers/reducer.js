import TYPES from '../types/type.js'

const initialState = {
    num: 0,
    jsonData: undefined
}

function addNumberReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.PLUS_ONE:
            return Object.assign({}, state, {
                num: ++state.num
            });
            break;
        case TYPES.JSON_FETCH_START:
            console.log('data fetch start');

            return state;
            break;
        case TYPES.JSON_FETCH_SUCCESS:
            console.log('data fetch success');
            debugger;
            return Object.assign({}, state, {
                jsonData: action.jsonData
            })
            break;
        case TYPES.JSON_FETCH_FAIL:
            console.log('date fetch fail' + state.error);

            return Object.assign({}, state, {
                jsonData: undefined
            })
            break;
        default:
            return initialState;
            break;
    }
}

export default addNumberReducer