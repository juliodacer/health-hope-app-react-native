import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
export const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 120,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 15,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {fontSize: 30, marginLeft: 5},
});
