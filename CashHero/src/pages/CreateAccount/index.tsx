import React, { useRef } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import InputText from '../../components/Form/InputText';
import ButtonDefault from '../../components/Button';

import styles from './styles';
import { colors } from '../../assets/styles';
const logo = require('../../assets/images/logo.png');


const CreateAccount: React.FunctionComponent = () => {
	let formRef = useRef<FormHandles>(null);
	let navigation = useNavigation();

	function handleToLogin(){
		navigation.navigate('Login');
	}

	async function handleSubmit(data: FormData){
		console.log(data);
		try {
			const schema = Yup.object().shape({
				name: Yup.string().required('Campo obrigatório'),
				phone: Yup.string().required('Campo obrigatório'),
				password: Yup.string().required('Campo obrigatório')
			});
			await schema.validate(data, {
				abortEarly: false,
            });
            formRef.current?.reset();
		} catch (err) {
			const validationErrors:any = {};
			if (err instanceof Yup.ValidationError) {
				err.inner.forEach(error => {
                    validationErrors[error.path] = String(error.message);
                });
                formRef.current?.setErrors(validationErrors);
            }
        }	
	}
	
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : 'height'}
			style={{flex:1}}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{backgroundColor: '#F0F0F5'}}>
				<ScrollView>
					<View style={styles.container}>
						<Image source={logo} style={styles.logo} />
						<Text style={styles.info}>Faça o seu cadastro e começe a conta com a ajuda do heroi do dinheiro!</Text>
						<Form ref={formRef} onSubmit={handleSubmit}>
							<InputText name='name' label='Nome' placeholder='Informe seu nome'/>
							<InputText name='phone' label='Telefone' placeholder='Informe seu telefone'/>
							<InputText name='password' label='Senha' placeholder='Informe uma senha de acesso'/>
							<View style={styles.grid_buttons}>
								<ButtonDefault caption='Confirmar' isDark={true} onPress={() => formRef.current?.submitForm()}>
									<Icon name='check' size={24} color={colors.grey_light} />
								</ButtonDefault>
								<ButtonDefault caption='Cancelar' isDark={false} onPress={handleToLogin}>
									<Icon name='cancel-presentation' size={24} color={colors.grey_heavy} />
								</ButtonDefault>
							</View>
						</Form>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default CreateAccount;



// import React from 'react';
// import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Image  } from 'react-native';
// const logo = require('../../assets/images/logo.png');
// const KeyboardAvoidingComponent = () => {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS == "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
// 		  <Image source={logo} />
//           <Text style={styles.header}>Header</Text>
//           <TextInput placeholder="Username" style={styles.textInput} />
//           <View style={styles.btnContainer}>
//             <Button title="Submit" onPress={() => null} />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: "space-around"
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48
//   },
//   textInput: {
//     height: 40,
//     borderColor: "#000000",
//     borderBottomWidth: 1,
//     marginBottom: 36
//   },
//   btnContainer: {
//     backgroundColor: "white",
//     marginTop: 12
//   }
// });

// export default KeyboardAvoidingComponent;
