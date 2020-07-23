import {
  EMAIL_CHANGED,
  LOGIN_USER_LOAD,
  LOGIN_USER_LOGGED_IN,
  LOGIN_USER_SUCCESS,
  ON_PASSWORD_SHOW,
  PASSWORD_CHANGED,
  LOGIN_USER_LOGGED
} from "../../actions/types";

const INITIAL_STATE = {
    logged: false,

    email: "",
    password: "",
    user: null,
    securePassword: true
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_USER_LOGGED:
      return {...state, logged: action.payload.logged};
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case ON_PASSWORD_SHOW:
      return { ...state, securePassword: action.payload };
      default: 
     return state;
  }
};