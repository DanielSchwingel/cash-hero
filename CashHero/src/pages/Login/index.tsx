import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback, Image, View } from 'react-native';

import FormLogin from '../../components/Form/Login'

import styles from './styles';
const logo = require('../../assets/images/logo.png');

const Login: React.FunctionComponent = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : 'height'}
            style={styles.container}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container_child}>
                        <Image source={logo} style={styles.logo}/>
                        <View style={styles.form}>
                            <FormLogin/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

export default Login;