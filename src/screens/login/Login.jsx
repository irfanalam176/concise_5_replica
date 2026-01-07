import { Image, TouchableOpacity, View, Text } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { styles } from './styles';
import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import { colors } from '../../utils/colors';
import CustomButton from '../../components/CustomButton';
import { Fonts } from '../../assets/fonts';
import { images } from '../../assets/images';
import { heightDP, widthDP } from '../../utils/Responsive';
import { useState } from 'react';
import BiometricBtn from '../../components/BiometricBtn';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  return (
    <ScreenWrapper paddingHorizontal={20}>
      <SafeAreaView>
        <Image
          source={images.resizeLogo}
          style={{
            width: widthDP(170),
            height: heightDP(170),
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />

        <CustomText
          text={`"Training for employees who don't have time for training"`}
          caseType={'capitalize'}
          size={13}
          mb={40}
          align={'center'}
        />

        <CustomInput
          label={'Email'}
          placeholder={'irfan@gmail.com'}
          mb={20}
          mt={10}
        />
        <CustomInput
          label={'Password'}
          placeholder={'Password'}
          mb={20}
          mt={10}
          secureText
        />

        <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontSize: 16,
              color: colors.yellow10,
              fontFamily: Fonts.Inter_Medium,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <BiometricBtn />

        <CustomButton title={'Login'} mt={20} />
      </SafeAreaView>
    </ScreenWrapper>
  );
};

export default Login;
