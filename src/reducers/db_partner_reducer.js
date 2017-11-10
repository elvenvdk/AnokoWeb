import {
    GET_DB_PARTNER
} from '../actions/types';

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DB_PARTNER:
            return action.payload;
        default:
            return state;
    }
}