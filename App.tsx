import { StyleSheet } from 'react-native'
import React from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import LoginPage from './components/LoginPage'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


export type RootStackParamList = {
 WelcomeScreen: undefined,
 LoginPage: undefined
};
const Stack = createNativeStackNavigator<RootStackParamList>()


export default function DoCertify(){

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        <Stack.Screen name='LoginPage' component={LoginPage} />
      </Stack.Navigator>

    </NavigationContainer>
 
    
  )
}

// const styles = StyleSheet.create({})