import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
      },
      categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: colors.primaryLight,
        borderRadius: 50,
      },
      categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: colors.primary,
      },
});