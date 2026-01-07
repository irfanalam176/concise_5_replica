import { View, Text, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../utils/colors';

const ScreenWrapper = ({ children }) => {
  return (
    <View style={{backgroundColor:colors.black_op,flex:1,paddingHorizontal:10}}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.black_op}/>
        {children}
      
    </View>
  );
};

export default ScreenWrapper;
