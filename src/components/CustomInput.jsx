import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../utils/colors';
import { Fonts } from '../assets/fonts';
import Icons from './Icons';
import { useState } from 'react';

const CustomInput = ({
  pl,
  pr,
  bordercolor,
  mt,
  mb,
  label,
  labelColor,
  placeholderColor,
  placeholder,
  textSize,
  secureText = false,
}) => {

  const[hidePassword,setHidePassword] = useState(true)

  return (
    <View>
      {label && (
        <Text style={[styles.label, styles.labelColor(labelColor)]}>
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputStyle,
          styles.borderColor(bordercolor),
          { marginTop: mt, marginBottom: mb },
        ]}
      >
        <TextInput
          secureTextEntry={hidePassword?secureText:false}
          placeholderTextColor={
            placeholderColor || colors.gray
          }
          placeholder={placeholder ? placeholder : ''}
          style={{
            fontSize: textSize || 18,
            paddingLeft: pl || 10,
            flex: 1,
            color:colors.white
          }}
        />
        {secureText && (
          <TouchableOpacity onPress={()=>setHidePassword((prev)=>(!prev))}>
            <Icons
              family={'octicons'}
              name={hidePassword?"eye-off":"eye"}
              size={24}
              color={'white'}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderColor: bordercolor => ({
    borderColor: bordercolor || colors.gray,
  }),
  label: {
    fontSize: 18,
    fontFamily: Fonts.Inter_Regular,
  },
  labelColor: labelColor => ({
    color: labelColor || colors.white,
  }),
});
