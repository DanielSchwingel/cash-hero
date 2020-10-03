import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../assets/styles';

export default StyleSheet.create({
    info: {
        fontFamily: 'Poppins-Regular',
        fontSize: fonts.general,
        color: colors.grey_heavy,
    },
    currency_grey: {
        fontFamily: 'Poppins-Medium',
        fontSize: fonts.currency,
        color: colors.grey_heavy,
    },
    currency_green: {
        fontFamily: 'Poppins-Medium',
        fontSize: fonts.currency,
        color: colors.green,
    },
    currency_red: {
        fontFamily: 'Poppins-Medium',
        fontSize: fonts.currency,
        color: colors.red,
    },

})