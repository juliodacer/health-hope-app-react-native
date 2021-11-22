import { StyleSheet } from "react-native";
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
    containerButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 1,
        marginTop: 15,
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary
      },
})