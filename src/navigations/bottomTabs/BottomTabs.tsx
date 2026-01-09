import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../../screens/dashboard/Dashboard';
import { colors } from '../../utils/colors';
import Icons from '../../components/Icons';
import TeamStack from '../teamStack/TeamStack';
const Tabs = createBottomTabNavigator();
const BottomTabs = () => {

  const tabsList=[
    {
      name:"dashboard",
      component:Dashboard,
      label:"Home",
      icon:"home"
    },
    {
      name:"library",
      component:Dashboard,
      label:"Library",
      icon:"book"
    },
    {
      name:"yourTeam",
      component:TeamStack,
      label:"Your Team",
      icon:"people"
    },
    {
      name:"report",
      component:Dashboard,
      label:"Report",
      icon:"pie-chart"
    },
    {
      name:"challengeUp",
      component:Dashboard,
      label:"Challenge Up",
      icon:"trending-up"
    },
  ]

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.black_op },
        tabBarActiveTintColor:colors.yellow10,
      }}
    >
    {  
      tabsList.map((item,key)=>(
        <Tabs.Screen
        name={item.name}
        component={item.component}
        options={{
          tabBarLabel: item.label,
          tabBarIcon: ({focused}) => (
            <Icons
              name={item.icon}
              size={24}
              family={'ionicons'}
              color={focused?colors.yellow10:colors.white}

              key={key}
            />
          ),
        }}
      />
      ))
      }
      
    </Tabs.Navigator>
  );
};

export default BottomTabs;
