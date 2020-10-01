import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ButtonDefault from '../../components/Button';

import styles from './styles';
const logo = require('../../assets/images/logo.png');

const Home: React.FunctionComponent = () => {
    let navigation = useNavigation();

    function handleToLogin(){
        navigation.navigate('Login');
    }

    function handleToCreateAccount(){
        navigation.navigate('CreateAccount');
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <View style={styles.grid_buttons}>
                <ButtonDefault caption='Entrar' isDark={true} onPress={handleToLogin}/>
                <TouchableOpacity onPress={handleToCreateAccount}>
                    <Text style={styles.link}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Home;