import { DimensionValue, Text, TextStyle } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { Fonts } from '../assets/fonts';

type CustomTextType = {
  text?: string | number;
  mt?: DimensionValue | undefined
  mb?: DimensionValue | undefined
  me?: DimensionValue | undefined
  ms?: DimensionValue | undefined
  family?: string;
  textColor?: string;
  size?: number;
  caseType?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
};

const CustomText = ({
  text,
  mt,
  mb,
  me,
  ms,
  family,
  textColor,
  size,
  caseType,
  align,
}: CustomTextType) => {

  const textStyle: TextStyle = {
    color: textColor ?? colors.white,
    fontSize: size ?? 16,
    fontFamily: family ?? Fonts.Inter_Regular,
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ms,
    marginRight: me,
    textTransform: caseType ?? 'none',
    textAlign: align ?? 'auto',
  };

  return <Text style={textStyle}>{text}</Text>;
};

export default CustomText;
