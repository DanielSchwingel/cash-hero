import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey_light,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 100,
    },
    logo: {
        width: 200,
        height: 206,
    },
    grid_buttons:{
        alignItems: 'center'
    },
    link: {
        fontFamily: 'Poppins-Bold',
        fontSize: fonts.general,
        color: colors.grey_heavy,
        marginTop: 40
    }
})