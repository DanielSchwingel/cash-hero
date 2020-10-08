import React from 'react';
import { Formik } from 'formik';
import { Alert, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

interface iData {
    name: String,
    phone: String,
    password: String,
}

import ButtonDefault from '../../Button';
import Input from '../Input';

import { colors } from '../../../assets/styles';
import styles from './styles';

const FormCreateAccount: React.FunctionComponent = () => {
    const navigation = useNavigation();

    const validation = Yup.object().shape({
        name: Yup.string().min(3, 'O nome deve ter no mínimo 3 caracteres').required('Campo obrigatório'),
        phone: Yup.string().required('Campo obrigatório'),
        password: Yup.string().required('Campo obrigatório'),
    });

    function handleToLogin(){
        navigation.navigate('Login');
    }

    return(
        <Formik
            initialValues={{
                name: '',
                phone: '',
                password: '',
            }}
            onSubmit={ async values => {
                Alert.alert(JSON.stringify(values));
            }}
            validationSchema={validation}
        >
            {({ handleSubmit })=>(
                <View>
                    <Input fieldName='name' label='Nome' placeholder='Informe seu nome'/>
                    <Input fieldName='phone' label='Telefone' placeholder='Informe seu telefone'/>
                    <Input fieldName='password' label='Senha' placeholder='Informe sua senha'/>
                    <View style={styles.grid_buttons}>
                        <ButtonDefault onPress={handleSubmit} caption='Confirmar' isDark={true}/>
                        <ButtonDefault onPress={handleToLogin} caption='Cancelar' isDark={false}>
                            <Icon name='cancel' size={24} color={colors.grey_heavy} />
                        </ButtonDefault>
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default FormCreateAccount;