import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Fonts } from '../assets/fonts';
import { colors } from '../utils/colors';

type CustomButtonProps = {
  title?: string;
  color?: string;
  textColor?: string;
  borderColor?: string;
  mt?: number;
  mb?: number;
  onPress?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  color = colors.yellow10,
  textColor = colors.white,
  borderColor = colors.purple10,
  mt = 0,
  mb = 0,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.mainBtn,
        { backgroundColor: color, borderColor, marginTop: mt, marginBottom: mb },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.mainBtnText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  mainBtn: {
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  mainBtnText: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontFamily: Fonts.Inter_Bold,
    textAlign: 'center',
  },
});
