import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets/styles';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey_light,
        padding: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        fontFamily: 'Poppins-Bold',
        fontSize: fonts.general,
        color: colors.grey_heavy,
        width: 300
    },
    hero: {
        width: 100,
        height: 100,
    },
    grid_money: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    grid_graphic: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }, 
    graphic: {
        height: 250,
        width: 70,
    }
})
