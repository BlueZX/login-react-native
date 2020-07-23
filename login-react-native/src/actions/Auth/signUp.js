import { minLength, validateEmail } from "../../utils/validators";
import { toastTop } from "../../utils/toast";

import {
    LOGIN_USER_LOGGED,
    SIGNUP_PASS_V,
  } from "../types";

import { retrieveData, storeData } from "../../utils/localStorage";

import axios from "axios";

export const verificarPass = ({password, text}) => {
    return dispatch => {
        console.log(password,text);
        if(password !== text){
            dispatch({ type: SIGNUP_PASS_V, payload: {pass:'la verificacion de contraseña no es igual'} });
        }
        else{
            dispatch({ type: SIGNUP_PASS_V, payload: {pass:''} });
        }

    }
}

export const signupUser = ({email, password,password2, nombre}) => {
    return async dispatch => {
        if (!validateEmail(email.toLowerCase())) {
            return toastTop('El correo electronico no es valido');
        }

        if (!minLength(8, password)) {
            return toastTop('la contraseña debe contener como minimo 8 caracteres');
        }

        if(password !== password2){
            return toastTop('verifique la contraseña');
        }

        let datos = {
            email: email.toLowerCase(),
            password: password,
            nombre: nombre
        };

        console.log(datos);

        await axios.post('http://192.168.18.49:3000/api/signup', datos)
            .then(async res => {
                let user = res.data;
                console.log(user);

                if(res.data.ok){
                    await dispatch({ type: LOGIN_USER_LOGGED, payload: { logged: true } });

                }
                else{
                    toastTop(res.data.msg);
                }
            })
            .catch(err => {
                toastTop("El correo electronico ya se encuentra en uso");
            });
    };
};