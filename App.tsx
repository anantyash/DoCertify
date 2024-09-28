import { StyleSheet } from 'react-native'
import React from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import LoginPage from './components/LoginPage'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/Home'


export type RootStackParamList = {
 WelcomeScreen: undefined,
 LoginPage: undefined,
 Home : undefined
};
const Stack = createNativeStackNavigator<RootStackParamList>()


export default function DoCertify(){

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='LoginPage' component={LoginPage} options={{
          headerShown:false
        }} />
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>

    </NavigationContainer>
 
    
  )
}

// const styles = StyleSheet.create({})