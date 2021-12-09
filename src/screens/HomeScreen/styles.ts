import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
  
    titleContainer: {
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
  
    title: {
      marginTop: 10,
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
  });
  