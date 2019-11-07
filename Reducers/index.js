import { combineReducers } from 'redux';
import loginReducer from '../Reducers/loginReducer';
import fromReducer from './fromReducer';
import toReducer from './toReducer';

export default combineReducers({
  // isLoggedIn: loginReducer,
  from: fromReducer,
  to: toReducer
});
