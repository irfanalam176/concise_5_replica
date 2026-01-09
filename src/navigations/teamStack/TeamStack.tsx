import { createNativeStackNavigator } from '@react-navigation/native-stack'
import YourTeam from '../../screens/yourTeam/YourTeam'
import ViewUserAssessment from '../../screens/yourTeam/ViewUserAssessment'
import { StackScreens } from '../../types/navigations'

const Stack = createNativeStackNavigator<StackScreens>()
const TeamStack = () => {
  return (
    <Stack.Navigator initialRouteName='team' screenOptions={{headerShown:false}}>
        <Stack.Screen name='team' component={YourTeam}/>
        <Stack.Screen name='viewUser' component={ViewUserAssessment}/>
    </Stack.Navigator>
  )
}

export default TeamStack