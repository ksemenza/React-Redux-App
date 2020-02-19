import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions';

const initialState = {
    jokes: null,
    error: '',
    isFetching: false
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_DATA_FAILURE:
            return { 
                ...state,
                error: action.payload,
                isFetching: false
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                jokes: action.payload,
                error: '',
                isFetching: false
            }
        default: 
            return state;
    }
}

export default reducer;