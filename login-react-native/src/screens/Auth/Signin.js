import React, {useState} from 'react'
import {SafeAreaView, View, Text, TextInput, StyleSheet, Button } from 'react-native';

import { signupUser, verificarPass } from '../../actions/Auth/signUp';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [password2, setPass2] = useState('');
    const [nombre, setName] = useState('');

    const dispatch = useDispatch();

    const pass2Msg = useSelector(state => state.signup.pass)

    const userSignUp = () => {
        console.log("usuario", email, password, nombre);
        dispatch(signupUser({email, password,password2, nombre}));
    }

    const onChangePass2 = (text) => {
        setPass2(text);
        dispatch(verificarPass({password, text}));
    }

    return (
        <SafeAreaView style={styles.container} >
            <Header title="Registrarse" />
            <View style={styles.con} >
                <Text>Correo electronico</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Text>Contraseña</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPass(text)}
                />

                <Text>Vuelva a escribir su contraseña</Text>
                <TextInput 
                    placeholder="Contraseña"
                    value={password2}
                    secureTextEntry={true}
                    onChangeText={text => onChangePass2(text)}
                />
                <Text style={styles.contra}>{pass2Msg}</Text>

                <Text>Nombre</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={text => setName(text)}
                />
                <Button color="#4ABDAC" title="Registrarse" onPress={() => {userSignUp()}}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom:10
    },

    con: {
        flex: 1,

    },
    espaciado: {
        marginBottom: 16,
    },
    input: {
        marginBottom:20
    },
    contra:{
        color:'#FF0000'
    }
  });

export default Signin;
