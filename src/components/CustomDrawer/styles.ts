import {StyleSheet} from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  name:{
    fontSize: 22,
    color: colors.black,
    fontWeight: 'bold',
    marginTop: 5
  },
  description: {
    fontSize: 18,
    color: colors.white,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: colors.primaryLight
  },
  icon: {
    marginRight: 10,
  },

  avatar: {
    height: 150,
    width: 150,
    borderRadius: 70,
    marginRight: 10,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },

  menuText: {
    fontSize: 18,
  },
});
