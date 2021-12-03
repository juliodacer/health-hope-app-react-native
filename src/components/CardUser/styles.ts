import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
    elevation: 7
  },
  cardsWrapper: {
    marginTop: 20,
    alignSelf: 'center',
  },
  cardImg: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginRight: 10
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 22
  },
  cardDetails: {
    fontSize: 18,
    color: '#444',
  },
});
