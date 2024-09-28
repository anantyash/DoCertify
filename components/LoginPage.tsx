import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Button, Divider, IconButton, TextInput} from 'react-native-paper';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Prop = NativeStackScreenProps<RootStackParamList,'LoginPage'>;

const LoginPage = ({navigation}:Prop) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#101A23' : '#e6e8e6'}
      />

      <View style={styles.head}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.hr} />
      </View>
      <View style={styles.inputArea}>
        <TextInput
          label="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          mode="outlined"
          style={styles.inputAreaText}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={!showPassword}
          right={<TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
          />}
          style={styles.inputAreaText}
          
          
        />
        <Button mode='text' style={styles.link} onPress={() => console.warn('Forget Pressed')}>Forget Password?</Button>

        <Button mode='contained' style={styles.btn} labelStyle={styles.btntxt} onPress={() =>navigation.replace('Home')}>Login</Button>
      </View>
      <View style={{backgroundColor:'red', marginTop:30, flex:1, alignItems:'center' }}>
     <Divider/>
     <Text>--- OR ---</Text>
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingLeft:'10%',
    // paddingRight:'10%',
    // backgroundColor: 'yellow',
    // alignItems:'center'
  },
  lightContainer: {
    backgroundColor:'#e6e8e6'
  },
  darkContainer: {
    backgroundColor:'#101A23',
  },
  heading: {
    color: '#101A23',
    fontSize: 40,
    fontFamily: 'JosefinSans-Bold',
  },

  hr: {
    paddingTop: 10,
    borderBottomWidth: 1,
    width: '90%',

  },

  head: {

    marginLeft: '10%',
  },
  inputArea: {
    marginTop: '5%',
    width: '80%',
    alignSelf: 'center',
  },
  inputAreaText:{
    fontSize:19
  },
  inputAreaLabel:{},
  link: {
  
    color: 'blue',
    flex:1,
    alignItems:'flex-start'
  },
  btn: {
    marginTop: '5%',
    backgroundColor: '#A2CF2A',
    elevation:5,
  },

  btntxt: {
    padding: 5,
    fontSize: 24,
  },
});
