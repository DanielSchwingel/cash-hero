import React from 'react';
import { View, Image, Text } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts'
import { colors } from '../../assets/styles';
 
import MoneyDisplay from '../../components/MoneyDisplay';

import styles from './styles';
const hero = require('../../assets/images/hero.png');

const Dashboard: React.FunctionComponent = () => {
    const fill = 'rgb(134, 65, 244)'
    const data = [30, 30]

    let color_revenue = [colors.green];
    let color_expense = [colors.red, colors.grey_medium];
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
            {/* <View style={styles.grid_graphic}> */}
                <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                    <Grid />
                </BarChart>
            {/* </View> */}

        </View>

    )
};

export default Dashboard;