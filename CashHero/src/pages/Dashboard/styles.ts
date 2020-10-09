import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets/styles';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey_light,
        padding: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    graphic: {
        height: 200,
    },
    align_left:{
        width: '100%',
        alignItems: 'flex-start',
    }
})
