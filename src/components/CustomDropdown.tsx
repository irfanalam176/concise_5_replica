import React, { useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../utils/colors';

type CustomDropdownProps = {
  bordercolor?: string;
  bgColor?: string;
};

type DropdownItem = {
  label: string;
  value: string | number;
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  bordercolor,
  bgColor,
}) => {
  const [value, setValue] = useState<string | number | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const data: DropdownItem[] = [
    { label: 'All', value: 'all' },
    { label: 'Last 5 Days', value: 5 },
    { label: 'Last 15 Days', value: 15 },
    { label: 'Last 30 Days', value: 30 },
  ];


  return (
    <View>
      <Dropdown
        style={[
          styles.dropdown,
          {
            backgroundColor: bgColor ?? colors.black1,
            borderColor: bordercolor ?? colors.gradientYellow,
          },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Duration' : '...'}
        value={value}
        containerStyle={[
          styles.menuContainer,
          { borderColor: bordercolor ?? colors.gradientYellow },
        ]}
        itemTextStyle={{ color: colors.white }}
        iconColor={colors.yellow10}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: DropdownItem) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },

  placeholderStyle: {
    fontSize: 16,
    color: colors.white,
  },

  selectedTextStyle: {
    fontSize: 16,
    color:colors.white
  },

  menuContainer: {
    backgroundColor: colors.black1,
    borderRadius: 10,
  },
});
