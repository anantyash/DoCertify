import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const LoginPage = () => {
  const iconButton = <FontAwesome5 name="fa-eye" size={15} />;
  return (
    <View style={styles.container}>
      
      <StatusBar 
          barStyle={'dark-content'}
          backgroundColor={'transparent'} 
      />

      <View style={styles.head}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.hr} />
      </View>

      <TextInput style={styles.inputArea} placeholder="Username" />

      <TextInput style={styles.inputArea} placeholder="Password" secureTextEntry={true}/>

      <TouchableOpacity>
        <Text style={styles.link}>Forget Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    marginLeft:'10%'
  },
  heading: {
    color: '#101A23',
    // fontWeight:'bold',
    fontSize: 40,
    fontFamily: 'JosefinSans-Bold',
  },
  hr:{
    paddingTop: 10,
    marginLeft: -10,
    borderBottomWidth:1,
    width:'90%'
  },

  head: {
    // alignItems: 'center',   
  },
  inputArea: {
    // marginLeft: '10%',
    marginTop: '5%',
    padding: '2%',
    width: '80%',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#101A23',
    color: '#A2CF2A',
  },
  link:{
    padding:5,
    color:'blue',
    
  },
  btn:{
    // alignContent:'center',
    marginTop: '5%',
    // marginLeft: '28%',
    width: '80%',
    // height:80,
    borderRadius:5,
    borderWidth:2,
    // borderColor: '#101A23',
    backgroundColor:'#A2CF2A',
  },
  
  btntxt:{
    textAlign:'center',
    fontSize: 20,
    fontWeight:'bold',
    padding:5,
    color: '#EFEFEF'
  }
});
