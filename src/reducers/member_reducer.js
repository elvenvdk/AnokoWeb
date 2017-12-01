import {
    GET_MEMBER
} from '../actions/types';

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_MEMBER:
            return action.payload;    
    }
    return state;
}