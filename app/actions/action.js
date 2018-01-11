import TYPES from '../types/type';

export var plusOne = function () {
    return {
        type: TYPES.PLUS_ONE
    }
}

export function getJson(url) {
    return function (dispatch) {
        dispatch({
            type: TYPES.JSON_FETCH_START
        });
        fetch(url, {
            mode: "no-cors"
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                dispatch({
                    type: TYPES.JSON_FETCH_FAIL,
                    error: e
                });
            }
        }).then(json => {
            dispatch({
                type: TYPES.JSON_FETCH_SUCCESS,
                jsonData: json
            });
        }).catch(e => {
            dispatch({
                type: TYPES.JSON_FETCH_FAIL,
                error: e
            });
        });

    }
}