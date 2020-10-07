import React, { useRef } from 'react';
import { Formik } from 'formik';
import { View, Text, TextInput, Button } from 'react-native';
import * as Yup from 'yup';

const Month: React.FunctionComponent = () => {
    const user = useRef(null);
    const password = useRef(null);

    const FormSchema=Yup.object().shape({
        user: Yup.string().required('Campo obrigatório'),
        password: Yup.string().required('Campo obrigatório'),
    });

    return(
        <Formik
            initialValues={{
                user: '',
                password: '',
            }}
            onSubmit={values => {
                console.log(values);
            }}
            validationSchema={FormSchema}
            validateOnBlur={true}
        >
            {({values, handleChange, handleSubmit, errors }) => (
                <View>
                    <Text>Usuário</Text>
                    <TextInput
                        ref={user}
                        value={values.user}
                        onChangeText={handleChange('user')}
                    />
                    {errors.user && <Text>{errors.user}</Text>}
                    <Text>Senha</Text>
                    <TextInput
                        ref={password}
                        value={values.password}
                        onChangeText={handleChange('password')}
                    />
                    {errors.password && <Text>{errors.password}</Text>}
                    <Button title='Entrar' onPress={handleSubmit}/>
                </View>
            )}
        </Formik>
    )
};

export default Month;