import React from 'react';
import { View, Image, Text } from 'react-native';
import ButtonDefault from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
 
import MoneyDisplay from '../../components/MoneyDisplay';

import styles from './styles';
import { colors } from '../../assets/styles';
const hero = require('../../assets/images/hero.png');

const Dashboard: React.FunctionComponent = () => {
    const navigation = useNavigation();

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
                <MoneyDisplay color='green' value={5620.10} info='Receitas'/>
                <MoneyDisplay color='red' value={5620.10} info='Receitas'/>
            </View>
            <ButtonDefault caption='Editar mês' isDark={false} onPress={handleToMonth}>
                <Icon name='square-edit-outline' size={24} color={colors.grey_heavy} />
            </ButtonDefault>
        </View>

    )
};

export default Dashboard;