import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    container_child: {
        flex: 1,
        backgroundColor: colors.grey_light,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 30,
    },
    logo: {
        width: 200,
        height: 206,
        margin: 50
    },
    form: {
        marginBottom: 50
    }
});