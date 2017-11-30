import {
    GET_MEMBER,
    GET_DB_MEMBER,
    MEMBER_STATUS,
    DB_MEMBER_STATUS
} from './types';

import {
    database,
    storage,
    auth
} from '../databases';

export const login = (email, password) => {
    return dispatch => auth.signInWithEmailAndPassword(email, password);
}