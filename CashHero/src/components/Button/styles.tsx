import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets/styles';

export default StyleSheet.create({
    container_dark: {
        width: 150,
        height: 43,
        backgroundColor: colors.grey_heavy,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    caption_dark: {
        color: colors.grey_light,
        fontSize: fonts.general
    },
    container: {
        width: 150,
        height: 43,
        backgroundColor: colors.grey_light,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.grey_heavy,
        alignItems: 'center',
        justifyContent: 'center'
    },
    caption: {
        color: colors.grey_heavy,
        fontSize: fonts.general,
        fontFamily: 'Poppins-Bold'
    }
})