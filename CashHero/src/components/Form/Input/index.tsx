import React from 'react';
import{ View, Text, TextInput, TextInputProps } from 'react-native';
import { useField } from 'formik';

import styles from './styles';
import { colors } from '../../../assets/styles';

interface iProps extends TextInputProps {
	fieldName: String;
    label: String;
};

const Input: React.FunctionComponent<iProps> = ({label, fieldName,...props}) => {
    const [ field, meta ] = useField(String(fieldName))
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                style={styles.input} 
                placeholderTextColor={colors.grey_medium} 
                value={field.value}
                onChangeText={field.onChange(String(fieldName))}
                {...props}
            />
            { meta.error && meta.touched && (<Text style={styles.danger}>{meta.error}</Text>) }
        </View>
    )
};

export default Input;

