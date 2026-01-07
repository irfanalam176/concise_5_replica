
import { StyleSheet } from 'react-native';
import { heightDP, widthDP } from '../../utils/Responsive';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  Image: {
    height: heightDP(37),
    width: widthDP(140),
    resizeMode: 'cover',
  },
  dividerView: {
    height: heightDP(54),
    borderWidth:1,
    borderColor: colors.white,
    marginStart:10
  },
  border: { height: 1, width: '45%', backgroundColor: colors.grey },
  fingerPrintView: {
    width: '100%',
    height: heightDP(60),
    borderColor: colors?.secondary,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 17,
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent:'center',
    alignItems:'center'
  },
  faceView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  imageStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  forget: {
    fontSize: 16,
    color: colors.secondary,
    alignSelf: 'flex-end',
    textDecorationLine:'underline'
  }
});

export { styles };
