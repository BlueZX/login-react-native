import {
  SIGNUP_PASS_V
} from "../../actions/types";

const INITIAL_STATE = {
    pass: ' '
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case SIGNUP_PASS_V:
        return {...state, pass: action.payload.pass};
      default: 
       return state;
    }
  };