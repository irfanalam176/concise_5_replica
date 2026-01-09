import { colors } from '../utils/colors';
import { Octicons } from '@react-native-vector-icons/octicons';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

type IconsProps = {
  family?: string;
  name?: any;
  color?: string;
  size?: number;
  style?: TextStyle | ViewStyle;
};

const Icons: React.FC<IconsProps> = ({ family, name, color, size, style }) => {
  let Family;
  if (family?.toLocaleLowerCase() == 'octicons') {
    Family = Octicons;
  } else if (family?.toLocaleLowerCase() == 'ionicons') {
    Family = Ionicons;
  } else {
    Family = Ionicons;
  }

  return (
    <Family
      name={name ?? 'help-outline'}
      color={color ?? colors.black}
      size={size ?? 14}
      style={style}
    />
  );
};
export default Icons;
