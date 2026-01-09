import React, { useEffect,FC } from 'react'
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from "./src/navigations/StackNavigation/RootNavigator"
const App:FC = () => {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
  <SafeAreaProvider>
    <RootNavigator/>
  </SafeAreaProvider>
  )
}

export default App