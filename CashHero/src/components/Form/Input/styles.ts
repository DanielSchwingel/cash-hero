import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../../assets/styles';

export default StyleSheet.create({
    container: {
        width: '100%',
        margin: 5,
    },
    label: {
        fontFamily: 'Poppins-Bold',
        fontSize: fonts.general,
        color: colors.grey_heavy,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.grey_heavy,
        minWidth: '100%',
        color: colors.grey_medium,
    },
    danger: {
        color: colors.red,
        fontFamily: 'Poppins-Medium',
        fontSize: fonts.small,
        marginTop: 3,
    }
});