import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

interface iData {
    phone: String,
    password: String,
}

import ButtonDefault from '../../Button';
import Input from '../Input';

import { colors } from '../../../assets/styles';
import styles from './styles';

const FormLogin: React.FunctionComponent = () => {
    const navigation = useNavigation();

    const validation = Yup.object().shape({
        phone: Yup.string().required('Campo obrigatório'),
        password: Yup.string().required('Campo obrigatório'),
    });

    return(
        <Formik
            initialValues={{
                phone: '',
                password: '',
            }}
            onSubmit={ async values => {
                navigation.navigate('Dashboard');
            }}
            validationSchema={validation}
        >
            {({ handleSubmit })=>(
                <View>
                    <Input fieldName='phone' label='Telefone' placeholder='Informe seu telefone'/>
                    <Input fieldName='password' label='Senha' placeholder='Informe sua senha'/>
                    <View style={styles.grid_buttons}>
                        <ButtonDefault onPress={handleSubmit} caption='Entrar' isDark={true}/>
                        <ButtonDefault onPress={()=>{}} caption='Biometria' isDark={false}>
                            <Icon name='fingerprint' size={24} color={colors.grey_heavy} />
                        </ButtonDefault>
                    </View>
                </View>
            )}

        </Formik>
    );
};

export default FormLogin;