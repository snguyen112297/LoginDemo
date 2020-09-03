import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
  const [username, setUsername] = useState("username")
  const [password, setPassword] = useState("password")
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={styles.textinput} placeholderTextColor="#ffffff" onChangeText={text => setUsername(text)}>{username}</TextInput>
      </View>
      <View style={styles.inputView}>
    <TextInput style={styles.textinput} placeholderTextColor="#ffffff" onChangeText={text => setPassword(text)}>{password}</TextInput>
      </View>
      <View>
        <TouchableOpacity style={styles.loginBtn} onPress={
          () => {setUsername(""), setPassword("")}}>

          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: "green"
  },
  textinput: {
    color: "white",
    height: 50
  },
  inputView:{
    width:"70%",
    backgroundColor:"black",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  loginBtn:{
    width:"70%",
    backgroundColor:"black",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:20,
    padding: 20
  },
  loginText: {
    color: "white"
  }
});
