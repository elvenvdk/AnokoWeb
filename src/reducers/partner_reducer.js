import _ from 'lodash';
import {
    GET_PARTNER
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_PARTNER:
            return action.payload;
    }
    return state;
}