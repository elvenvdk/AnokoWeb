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

export const logout = () => {
    return dispatch => auth.signOut();
}

export const createMembers = (data, picture) => {
    const {
        companyName,
        title,
        firstName,
        lastName,
        email,
        password,
        profilePicture
    } = data;
    return dispatch => {auth.createUserWithEmailAndPassword(email, password)
        .then((member) => {
            if(member !== null) {
                storage.child(`members/profile/image/${new Date().getTime()}`)
                    .put(profilePicture[0])
                        .then((snapshot) => {
                            database.ref('members').child(member.uid).set({
                                companyName,
                                title,
                                firstName,
                                lastName,
                                email,
                                password,
                                profilePicture: snapshot.metadata.downloadURLs[0]
                            })
                        })
            }
        })}
}

// member log-in status
export const getMember = () => {
    return dispatch => {
        dispatch({
            type: MEMBER_STATUS,
            payload: true
        });
        auth.onAuthStateChanged(member => {
            dispatch({
                type: GET_MEMBER,
                payload: member
            });
            dispatch({
                type: MEMBER_STATUS,
                payload: false
            });
        });
    }
}

// data from members in database
export const getDbMember = () => {
    return dispatch => {
        dispatch({
            type: DB_MEMBER_STATUS,
            payload: true
        });
        database.ref('members').on('value', snapshot => {
            const db = snapshot.val();
            dispatch({
                type: GET_DB_MEMBER,
                payload: db
            });
            dispatch({
                type: DB_MEMBER_STATUS,
                payload: false
            });
        });
    };
}