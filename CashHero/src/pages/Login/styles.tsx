import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey_light,
        alignItems: 'center',
        padding: 30
    },
    logo: {
        width: 200,
        height: 206,
        margin: 50
    },
    grid_buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 50
    }
});