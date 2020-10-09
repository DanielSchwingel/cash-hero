import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ButtonDefault from '../../components/Button';

import styles from './styles';
import { colors } from '../../assets/styles';

const Month: React.FunctionComponent = () => {
    const data = [
        {
            id: 1,
            description: 'Salário',
            value: 150.10,
            type: 1
        },
        {
            id: 2,
            description: 'Vale',
            value: 150.10,
            type: 1
        },
        {
            id: 3,
            description: 'Luz',
            value: 95,
            type: 0
        }
    ]
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}> 
                Histórico do mês
            </Text>
            <Text>
                Movimentações realizadas
            </Text>
            <FlatList
                style={styles.historic}
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({item})=> (
                    <View style={styles.moviment}>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
            <View style={styles.grid_buttons}>
                <ButtonDefault caption='Nova receita' isDark={false}>
                    <Icon name='plus' size={24} color={colors.grey_heavy} />
                </ButtonDefault>
                <ButtonDefault caption='Nova despesa' isDark={false}>
                    <Icon name='minus' size={24} color={colors.grey_heavy} />
                </ButtonDefault>

            </View>
        </View>
    )
};

export default Month;