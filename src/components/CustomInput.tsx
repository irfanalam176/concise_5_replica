import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { colors } from '../utils/colors';
import { Fonts } from '../assets/fonts';
import Icons from './Icons';

type CustomInputProps = {
  pl?: number;
  pr?: number;
  bordercolor?: string;
  mt?: number;
  mb?: number;
  label?: string;
  labelColor?: string;
  placeholderColor?: string;
  placeholder?: string;
  textSize?: number;
  bgColor?: string;
  search?: boolean;
  secureText?: boolean;
  onChangeText?: (text: string) => void;
};

const CustomInput: React.FC<CustomInputProps> = ({
  pl = 10,
  pr = 10,
  bordercolor = colors.gray,
  mt = 0,
  mb = 0,
  label,
  labelColor = colors.white,
  placeholderColor = colors.gray,
  placeholder = '',
  textSize = 18,
  bgColor = colors.black,
  search = false,
  secureText = false,
  onChangeText,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={{ marginTop: mt, marginBottom: mb }}>
      {label && <Text style={[styles.label, { color: labelColor }]}>{label}</Text>}

      <View
        style={[
          styles.inputStyle,
          { borderColor: bordercolor, backgroundColor: bgColor, paddingLeft: pl, paddingRight: pr },
        ]}
      >
        {search && (
          <Icons
            name="search"
            family="ionicons"
            size={24}
            color={colors.gray}
            style={{ marginLeft: 10 }}
          />
        )}

        <TextInput
          secureTextEntry={hidePassword && secureText}
          placeholderTextColor={placeholderColor}
          placeholder={placeholder}
          style={{ flex: 1, fontSize: textSize, color: colors.white }}
          onChangeText={onChangeText}
        />

        {secureText && (
          <TouchableOpacity onPress={() => setHidePassword(prev => !prev)}>
            <Icons
              family="octicons"
              name={hidePassword ? 'eye-off' : 'eye'}
              size={24}
              color="white"
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
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  label: {
    fontSize: 18,
    fontFamily: Fonts.Inter_Regular,
    marginBottom: 5,
  } as TextStyle,
});
