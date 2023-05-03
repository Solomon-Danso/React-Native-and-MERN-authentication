import { View, Text } from 'react-native'
import React from 'react'
import SignUp from './Screens/SignUp'
import SignIn from './Screens/SignIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Screens/Home'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SignIn'>
    
      <Stack.Screen name="SignUp"component={SignUp}/>
      <Stack.Screen name="SignIn"component={SignIn}/>
      <Stack.Screen name="Home"component={Home}/>
            
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App