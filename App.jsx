import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import { Octicons } from '@react-native-vector-icons/octicons';
import Login from './src/screens/login/Login.jsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = () => {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
  <SafeAreaProvider>
    <Login/>
  </SafeAreaProvider>
  )
}

export default App