import React from 'react';
import { TouchableOpacityProps, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface iProps extends TouchableOpacityProps {
    caption: String,
    isDark: Boolean,
}

const ButtonDefault: React.FunctionComponent<iProps> = (props) => {
    return (
        <TouchableOpacity style={ props.isDark ? styles.container_dark : styles.container } onPress={props.onPress} >
            {props.children}
            <Text style={ props.isDark ? styles.caption_dark : styles.caption }>
                {props.caption}
            </Text>
        </TouchableOpacity>
    )
};

export default ButtonDefault;