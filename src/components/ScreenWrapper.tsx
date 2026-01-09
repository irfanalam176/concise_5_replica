import { View, Text, ScrollView, StatusBar } from 'react-native';
import React, { PropsWithChildren } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenWrapperTypes = {
  isGradien?: boolean;
  withHeader?: boolean;
};

const ScreenWrapper = ({
  isGradien,
  children,
  withHeader,
}: PropsWithChildren<ScreenWrapperTypes>) => {
  return isGradien ? (
    <LinearGradient
      colors={[colors.darkBlue, colors.black, colors.darkBlue]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, paddingHorizontal: withHeader ? 0 : 10 }}
    >
      <StatusBar barStyle={'light-content'} backgroundColor={colors.black_op} />
      <SafeAreaView>{children}</SafeAreaView>
    </LinearGradient>
  ) : (
    <View
      style={{
        backgroundColor: colors.black_op,
        flex: 1,
        paddingHorizontal: withHeader ? 0 : 10,
      }}
    >
      <StatusBar barStyle={'light-content'} backgroundColor={colors.black_op} />
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default ScreenWrapper;
