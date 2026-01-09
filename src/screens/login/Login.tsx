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
import React, { useState } from 'react';
import BiometricBtn from '../../components/BiometricBtn';
import { StackProps } from '../../types/navigations';

const Login:React.FC<StackProps> = ({navigation}) => {

  const[email,setEmail] = useState<string>("")
  const[password,setPassword] = useState<string>("")

  const authInputs=[
    {
      lable:"Email",
      placeholder:"irfancs176@gmail.com",
      mt:10,
      mb:20,
      secureText:false,
      onChangeText:(e:string)=>setEmail(e)
    },
    {
      lable:"Password",
      placeholder:"Password",
      mt:10,
      mb:20,
      secureText:true,
      onChangeText:(e:string)=>setPassword(e)
    }
  ]

  return (
    <ScreenWrapper >
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

      { authInputs.map((item,key)=>(
        <CustomInput
        key={key}

          label={item.lable}
          placeholder={item.placeholder}
          mb={item.mb}
          mt={item.mt}
          secureText={item.secureText}
          onChangeText={item.onChangeText}
        />
      ))  }
      

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

        <CustomButton title={'Login'} mt={20} textColor={colors.black} onPress={()=>{
          navigation.navigate("tabs")
        }}/>
    </ScreenWrapper>
  );
};

export default Login;
