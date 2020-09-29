import React, { useRef } from 'react';
import { Image, View } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import InputText from '../../components/Form/InputText';
import ButtonDefault from '../../components/Button';

import styles from './styles';
const logo = require('../../assets/images/logo.png');

const Login: React.FunctionComponent = () => {
    const formRef = useRef<FormHandles>(null);


    async function handleSubmit(data: FormData){
		try {
			const schema = Yup.object().shape({
				phone: Yup.string().required('Campo obrigatório'),
                password: Yup.string().required('Campo obrigatório'),
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
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <InputText name='phone' label='Telefone' placeholder='Informe seu telefone'/>
                <InputText name='password' label='Senha' placeholder='Informe sua senha'/>
                <ButtonDefault onPress={() => formRef.current?.submitForm()} caption='Entrar' isDark={true}/>
            </Form>
        </View>
    )
};

export default Login;