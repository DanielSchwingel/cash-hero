import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View, Text, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FormCreateAccount from '../../components/Form/CreateAccount';

import styles from './styles';
const logo = require('../../assets/images/logo.png');

const CreateAccount: React.FunctionComponent = () => {
	let navigation = useNavigation();

	function handleToLogin(){
		navigation.navigate('Login');
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : 'height'}
			style={styles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView>
					<View style={styles.container_child}>
						<Image source={logo} style={styles.logo} />
						<Text style={styles.info}>Faça o seu cadastro e começe a conta com a ajuda do heroi do dinheiro!</Text>
						<FormCreateAccount />
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default CreateAccount;
