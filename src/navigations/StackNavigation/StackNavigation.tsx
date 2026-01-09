import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator,NativeStackScreenProps } from '@react-navigation/native-stack'
import Login from '../../screens/login/Login'
import BottomTabs from "../bottomTabs/BottomTabs"
import { StackScreens } from '../../types/navigations'
const Stack = createNativeStackNavigator<StackScreens>()
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='tabs' component={BottomTabs}/>
    </Stack.Navigator>
  )
}

export default StackNavigation