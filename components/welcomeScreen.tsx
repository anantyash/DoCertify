import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'


const WelcomeScreen = () => {
    const { width, height } = Dimensions.get('window');
  return (
    <View style={styles.screen}>

      {/* For Status Bar */}
      <StatusBar
          backgroundColor={'#101A23'}
          barStyle={'light-content'}
        />

      <Image source={require("../assets/Images/startImage.jpeg")} 
        style={{marginTop:-50,
          width: width ,
          height: height-200,
          // resizeMode: 'contain'         
        }}/>

      <Text style={styles.greettxt}>Welcome{'\n'}<Text style={{fontSize:40, marginTop:-10}}>To</Text></Text>
      <Text style={styles.appname}>DoCertify</Text>

      {/* For Button */}
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>Next {' >>'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  
  screen:{
    backgroundColor:'#101A23',
  },

  greettxt:{
    marginTop:-90,
    color:'#ffffff',
    height: 300,
    fontSize: 54,
    textAlign:'center',
    lineHeight:60,
    fontFamily:'JosefinSans',
  },

  appname:{
    marginTop:-210,
    color:'#ffffff',
    height: 250,
    fontSize: 60,
    textAlign:'center',
    fontFamily:'JosefinSans-SemiBold'
  },

  btn:{
    marginTop: -80,
    marginLeft: '35%',
    width: 120,
    height:80,
  },
  
  btntxt:{
    backgroundColor:'#A2CF2A',
    textAlign:'center',
    fontSize: 25,
    fontWeight:'bold',
    padding:5,
    borderRadius:15,
    color: '#EFEFEF'
  }
})