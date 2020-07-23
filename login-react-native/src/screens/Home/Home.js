import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Button, FlatList, Text, SafeAreaView} from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { unloging } from '../../actions/Auth/login';

import Header from '../../components/Header';

const Home = () => {

    const Separator = () => (
        <View style={styles.separator} />
    );
      
    const [usuarios, setUsuarios] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://192.168.18.49:3000/api/all/usuario')
        .then(res => {
            console.log(res.data);
            if(res.data.ok){
                setUsuarios(res.data.usuarios);
            }
        }); 
    }, []);

    const cerrarSesion = () => {
        console.log('cerrar sesion');
        dispatch(unloging());
    }

    const renderList = ({item}) => {

        return (
            <View>
                <Text>Nombre: {item.nombre}</Text>
                <Text>Correo Electronico: {item.email}</Text>
                <Separator />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.con}>
                <Header title="Lista de usuarios" />
                <FlatList
                    data={usuarios}
                    renderItem={item => renderList(item)}
                    keyExtractor={item => item._id}
                />
                <Button color="#333" title="Cerrar sesion" onPress={() => cerrarSesion()}/>
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
    separator: {
        marginVertical: 8,
        borderBottomColor: '#333',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
export default Home;
