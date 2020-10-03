import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface iProps {
    info: String,
    color: String,
    value: number,
}

const MoneyDisplay: React.FunctionComponent<iProps> = (props) => {
    return(
        <View>
            <Text style={styles.info}>
                {props.info}
            </Text>
            {}
            <Text style={styles.currency_green}>
                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.value)}
            </Text>
        </View>
    )
};

export default MoneyDisplay;