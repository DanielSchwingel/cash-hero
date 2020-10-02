import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../assets/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey_light,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
    },
    logo: {
        width: 150,
        height: 155,
        marginBottom: 20
    },
    info: {
        fontFamily: 'Poppins-Regular',
        color: colors.grey_heavy,
        fontSize: fonts.general,
        marginBottom: 20,
    },
    grid_buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 50,
    }
})