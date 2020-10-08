import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PieChart } from 'react-native-svg-charts'
import { useNavigation } from '@react-navigation/native';
 
import MoneyDisplay from '../../components/MoneyDisplay';
import ButtonDefault from '../../components/Button';

import styles from './styles';
import { colors } from '../../assets/styles';
const hero = require('../../assets/images/hero.png');

const Dashboard: React.FunctionComponent = () => {
    const navigation = useNavigation();
    const pieData = [
        {
            key: 1,
            value: 1600.15,
            svg: {
                fill: colors.green,
            }
        },
        {
            key: 2,
            value: 500.10,
            svg: {
                fill: colors.red,
            }
        }
    ]

    function handleToMonth(){
        navigation.navigate('Month')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={hero} style={styles.hero} />
                <Text style={styles.info}>Esses sãos seus gastos e receitas do mês. E aí, ta no vermelho? Ou ta relax?</Text>
            </View>
            <View style={styles.grid_money}>
                <MoneyDisplay color='green' value={1600.15} info='Receitas'/>
                <MoneyDisplay color='red' value={500.10} info='Despesas'/>
            </View>
            <PieChart style={styles.graphic} data={pieData} />
            <MoneyDisplay color='grey' value={900.05} info='Seu saldo, por enquanto é de:'/>
            <View style={styles.align_left}>
                <MoneyDisplay color='red' value={1000} info='Sua meta de gastos mensal é de:'/>
            </View>
            <ButtonDefault caption='Editar mês' isDark={false} onPress={handleToMonth}>
                <Icon name='square-edit-outline' size={24} color={colors.grey_heavy} />
            </ButtonDefault>     
        </View>
    )
};

export default Dashboard;