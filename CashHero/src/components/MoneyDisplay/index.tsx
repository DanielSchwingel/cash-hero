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
            {props.color === 'green' &&
                <Text style={styles.currency_green}>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.value)}
                </Text>
            }
            {props.color === 'red' &&
                <Text style={styles.currency_red}>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.value)}
                </Text>
            }
            {props.color === 'grey' &&
                <Text style={styles.currency_grey}>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.value)}
                </Text>
            }
        </View>
    )
};

export default MoneyDisplay;