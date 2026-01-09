import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import CustomText from './CustomText';
import Icons from './Icons';
import { colors } from '../utils/colors';
import { widthDP } from '../utils/Responsive';
import { Fonts } from '../assets/fonts';

type CategoryCardProps = {
  color?: string;
  title?: string;
  withIcon?: boolean;
  bordercolor?: string;
  onPress?: () => void;
  mt?: number; // optional marginTop
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  color = colors.blue33,
  title = '',
  withIcon = false,
  bordercolor = colors.blue33,
  onPress,
  mt = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    onPress?.(); // call only if exists
    if (withIcon) {
      setIsOpen(prev => !prev);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.categoryCard,
        { borderColor: bordercolor, marginTop: mt },
      ]}
      onPress={handlePress}
    >
      <View style={[styles.iconBg, { backgroundColor: color }]}>
        <Icons
          name="sparkles"
          family="ionicons"
          size={35}
          color={colors.white}
        />
      </View>

      <CustomText size={18} text={title} family={Fonts.Inter_Medium} />

      {withIcon && (
        <Icons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={24}
          color={colors.yellow10}
          style={{ marginLeft: 'auto' }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: colors.black1,
    padding: 15,
    borderRadius: 15,
    borderWidth: 0.5,
    marginBottom: 10,
  } as ViewStyle,

  iconBg: {
    width: widthDP(50),
    height: widthDP(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  } as ViewStyle,
});
