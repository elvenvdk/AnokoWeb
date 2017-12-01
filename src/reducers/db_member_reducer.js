import {
    GET_DB_MEMBER
} from '../actions/types';

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
    switch (action.types) {
        case GET_DB_MEMBER:
            return action.payload;
    }
    return state;
}