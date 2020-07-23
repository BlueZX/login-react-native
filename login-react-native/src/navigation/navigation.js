import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Home from '../screens/Home/Home';
import Login from '../screens/Auth/Login';
import Signin from '../screens/Auth/Signin';

const Stack = createStackNavigator();

const Navigation = () => {

    const logged = useSelector(state => state.auth.logged)

    return (
        <Stack.Navigator>
            {   logged ? 
                (<Stack.Screen name="Home" component={Home}/>) :
                (
                    <>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="SignUp" component={Signin}/>
                    </>
                )
            }
        </Stack.Navigator>
    )
}

export default Navigation;
