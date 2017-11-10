import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DbPartnerReducer from './db_partner_reducer';
import PartnerReducer from './partner_reducer';
import LoadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  dbPartner: DbPartnerReducer,
  partner: PartnerReducer,
  loading: LoadingReducer
});


export default rootReducer;


