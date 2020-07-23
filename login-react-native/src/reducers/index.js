import { combineReducers } from "redux";
import login from './Auth/login';
import signup from './Auth/signup';

export default combineReducers({
    auth : login,
    signup
})