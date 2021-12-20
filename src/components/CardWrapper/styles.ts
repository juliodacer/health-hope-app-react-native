import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    marginHorizontal: 7,
    flexDirection: 'row',
    elevation: 5,
  },
  cardsWrapper: {
    marginTop: 20,
    alignSelf: 'center',
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: colors.white,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 17
  },
  cardDetails: {
    fontSize: 15,
    color: '#444',
  },
});
