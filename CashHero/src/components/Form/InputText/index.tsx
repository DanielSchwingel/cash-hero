import React, { useEffect, useRef } from 'react';
import { TextInputProps, View, TextInput, Text } from 'react-native';
import { useField } from '@unform/core';

import styles from './styles';
import { colors } from '../../../assets/styles';

interface iProps extends TextInputProps {
	name: String;
	label: String;
};
const InputText: React.FunctionComponent<iProps> = (props) => {
	const inputRef = useRef<TextInputProps>(null);
	const { fieldName, registerField, defaultValue, error, clearError } = useField(String(props.name));
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
			<Text style={styles.label}>{props.label}</Text>
			<TextInput 
				style={styles.input} 
				placeholderTextColor={colors.grey_medium} 
				onFocus={clearError} 
				placeholder={props.placeholder}
				onChangeText={value => {
					if (inputRef.current) {
					  inputRef.current.value = value;
					}
				}}
			/>
			{ error && <Text style={styles.danger}>{error}</Text> }
		</View>
	);
};
export default InputText;