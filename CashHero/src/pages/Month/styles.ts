import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey_light,
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: fonts.title,
        color: colors.grey_heavy,
        margin: 15,
    },
    historic: {
        borderWidth: 1,
        borderColor: colors.grey_heavy,
        borderRadius: 5,
        margin: 10,
        width: '100%'
    },
    moviment: {
        backgroundColor: colors.white,
        padding: 10,
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    grid_buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    }
})