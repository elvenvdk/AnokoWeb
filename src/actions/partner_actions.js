import {
    GET_DB_PARTNER,
    GET_PARTNER,
    DB_PARTNER_STATUS,
    PARTNER_STATUS
} from './types';

import {
    database,
    storage,
    auth
} from '../databases'

export const login = (email, password) => {
    return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export const logout = () => {
    return dispatch => auth.signOut();
}

export const createPartners = (data, picture) => {
    const {
        companyName,
        companyType,
        phoneNumber,
        address,
        city,
        state,
        zip,
        firstName,
        lastName,
        contactPhone,
        email,
        password,
        companyImage
    } = data;
    return dispatch => auth.createUserWithEmailAndPassword(email, password)
        .then((partner) => {
            if(partner !== null) {
                storage.child(`partners/profile/${new Date().getTime()}`)
                    .put(companyImage[0])
                        .then((snapshot) => {
                            database.ref('partners').child(partner.uid).set({
                                companyName,
                                companyType,
                                phoneNumber,
                                address,
                                city,
                                state,
                                zip,
                                firstName,
                                lastName,
                                contactPhone,
                                email,
                                password,
                                picture: snapshot.metadata.downloadURLs[0]
                            })
                        })
            }
        })
}

// partner logg-in status
export const getPartner = () => {
    return dispatch => {
        dispatch({
            type: PARTNER_STATUS,
            payload: true
        });
        auth.onAuthStateChanged(partner => {
            dispatch({
                type: GET_PARTNER,
                payload: partner
            });
            dispatch({
                type: PARTNER_STATUS,
                payload: false
            });
        });
    }
}

// data from partners database
export const getDbPartners = () => {
    return dispatch => {
      dispatch({
        type: DB_PARTNER_STATUS,
        payload: true
      });
      database.ref('partners').on('value', snapshot => {
        const db = snapshot.val();
        dispatch({
          type: GET_DB_PARTNER,
          payload: db
        });
        dispatch({
          type: DB_PARTNER_STATUS,
          payload: false
        });
      });
    };
  }



