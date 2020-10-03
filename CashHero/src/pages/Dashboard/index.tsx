import React from 'react';
import { View, Image, Text } from 'react-native';
 
import MoneyDisplay from '../../components/MoneyDisplay';

import styles from './styles';
const hero = require('../../assets/images/hero.png');

const Dashboard: React.FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={hero} style={styles.hero} />
                <Text style={styles.info}>Esses sãos seus gastos e receitas do mês. E aí, ta no vermelho? Ou ta relax?</Text>
            </View>
            <View style={styles.grid_money}>
                <MoneyDisplay color='green' value={5620.10} info='Receitas'/>
                <MoneyDisplay color='green' value={5620.10} info='Receitas'/>
            </View>
            
        </View>

    )
};

export default Dashboard;