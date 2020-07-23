import { minLength, validateEmail } from "../../utils/validators";
import { toastTop } from "../../utils/toast";

import {
    LOGIN_USER_LOGGED,
  } from "../types";

import { retrieveData, storeData } from "../../utils/localStorage";
import axios from "axios";

const loginUserSuccess = async (dispatch, user) => {
    //await storeData("user_profile", "logged", "true");
    dispatch({ type: LOGIN_USER_LOGGED, payload: { logged: true } });

    return;
};

const loginUserFail = (dispatch, payload) => {
    dispatch({ type: LOGIN_USER_LOGGED, payload: { logged: false } });
    toastTop(payload.error);
    return;
};

export const unloging = () => {
  return dispatch => {
    dispatch({ type: LOGIN_USER_LOGGED, payload: { logged: false } });
    toastTop('se ha cerrado sesión correctamente');
  }
};

export const loginUser = ({ email, password }) => {

    return async dispatch => {

      if (!validateEmail(email.toLowerCase()) || !minLength(8, password)) {
        return loginUserFail(dispatch, { error: 'credenciales invalidas :c'});
      }

      let datos = {
        email: email.toLowerCase(),
        password: password
      };

       await axios.post('http://192.168.18.49:3000/api/login', datos)
        .then(async res => {
            let user = res.data;
            console.log(user);
            
            if(res.data.ok){
              //await storeData("user_profile", "email", email.toLowerCase());
              //await storeData("user_profile", "password", password);
              await loginUserSuccess(dispatch, user);
            }
            else{
              toastTop(res.data.msg);
            }
        })
        .catch(err => {
            console.log(err);
          if (err.code === "UserNotFoundException") {
            toastTop('Usuario no encontrado');
          } else if (err.code === "UserNotConfirmedException") {
            toastTop('Usuario no confirmado');
          } else if (err.code === "NotAuthorizedException") {
            toastTop('No autorizado');
          } else {
            toastTop('ha ocurrio un error, intentelo mas tarde');
          }
        });
    };
  };