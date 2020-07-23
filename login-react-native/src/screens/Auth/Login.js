import React, {useState}  from 'react'
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, Button, TextInput, StyleSheet, Text } from 'react-native';

import { loginUser } from '../../actions/Auth/login';

import Header from '../../components/Header';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const dispatch = useDispatch();

    const onPressButtonLogin = () => {
        dispatch(loginUser({email, password}));
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Ingresar" />
            <View style={styles.con}>
                <Text>Login</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPass(text)}
                    secureTextEntry={true}
                />
                <View style={styles.espaciado} >
                    <Button color="#4ABDAC" title="Ingresar" onPress={() => onPressButtonLogin()} />
                </View>
                <View style={styles.espaciado} >
                    <Button color="#333" title="registrarse" onPress={() => navigation.navigate('SignUp')} />
                </View>
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
        justifyContent: 'center',
    },
    espaciado: {
        marginBottom: 16,
    },
    input: {
        marginBottom:20
    }
  });

export default Login;
