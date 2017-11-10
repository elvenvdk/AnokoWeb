import {
    PARTNER_STATUS,
    DB_PARTNER_STATUS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PARTNER_STATUS:
            return { ...state, partner: action.payload };
        case DB_PARTNER_STATUS:
            return { ...state, dbPartner: action.payload };
        default: 
            return state;
    }
}