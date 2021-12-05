import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
    elevation: 7
  },

  cardImg: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginRight: 10
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: 21,
    color: colors.black
  },
  cardDetails: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.gray,
  },
  cardOcupation: {
    fontSize: 18,
    color: 'orange',
  },
  cardAge:  {
    height: 25,
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 100,
  }
});
