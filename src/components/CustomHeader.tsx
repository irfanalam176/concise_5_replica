import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import Icons from './Icons';
import CustomText from './CustomText';
import { Fonts } from '../assets/fonts';
import { colors } from '../utils/colors';
import { images } from '../assets/images';
import { heightDP, widthDP } from '../utils/Responsive';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

type CustomHeaderProps = {
  isHome?: boolean;
  withBackBtn?: boolean;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ isHome, withBackBtn }) => {
  const navigation = useNavigation();

  if (isHome)
    return (
      <LinearGradient
        colors={[colors.brown, colors.parent]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.headerStyle}
      >
        <TouchableOpacity>
          <Icons
            name={'three-bars'}
            size={30}
            family={'Octicons'}
            color={colors.white}
          />
        </TouchableOpacity>
        <CustomText
          text={'your level: starter'}
          size={20}
          caseType={'capitalize'}
          family={Fonts.Inter_Regular}
        />
        <TouchableOpacity
          style={{
            width: widthDP(50),
            height: widthDP(50),
            backgroundColor: colors.blue33,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}
        >
          <Image
            source={images.trophy}
            style={{
              width: widthDP(40),
              height: heightDP(40),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </LinearGradient>
    );
  else if (withBackBtn) {
    return (
      <View style={styles.headetWithBackBtn}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icons name={'arrow-back'} color={colors.yellow10} size={24} />
        </TouchableOpacity>
        <CustomText
          text={'Back To EmployeesActivity'}
          size={20}
          caseType={'capitalize'}
          family={Fonts.Inter_Regular}
          me={'auto'}
          ms={'auto'}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.headerStyle}>
        <TouchableOpacity>
          <Icons
            name={'three-bars'}
            size={30}
            family={'Octicons'}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  backBtn: {
    width: widthDP(50),
    height: widthDP(50),
    backgroundColor: colors.black10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  headetWithBackBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: colors.black1,
  },
});
