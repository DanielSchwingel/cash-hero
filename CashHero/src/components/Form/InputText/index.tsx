import React, { useEffect, useRef, useState } from 'react';
import { TextInputProps, View, TextInput, Text } from 'react-native';
import { useField } from '@unform/core';

import styles from './styles';
import { colors } from '../../../assets/styles';


interface iProps extends TextInputProps {
	name: String;
	label: String;
};
const InputText: React.FC<iProps> = ({ name, label, ...rest }) => {
	const inputRef = useRef<TextInputProps>(null);
	const { fieldName, registerField, defaultValue, error, clearError } = useField(String(name));
	useEffect(() => {
		if (inputRef.current){
			inputRef.current.value = defaultValue;
		}
	}, [defaultValue]);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
			clearValue(ref) {
				ref.value = '';
				ref.clear();
			}
		});
	}, [fieldName, registerField]);
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={styles.input} {...rest} placeholderTextColor={colors.grey_medium} onFocus={clearError}/>
			{ error && <Text style={styles.danger}>{error}</Text> }
		</View>
	);
};
export default InputText;