import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ActivityIndicator, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import HomePage from './homePage';
import styles from '../styles/styles';

const LoginPage = ({togglePages}:{togglePages: ()=> void}) =>{
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail]  =useState('');
  const [password, setPassword]  =useState('');

  const login = async () => {
    setLoading(true);
    try {
      const response = await auth().signInWithEmailAndPassword(email, password).then(
        ()=>{
          console.log('User signed in!');
        }
      );
      console.log(response);
      setLoggedIn(true);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Login failed as : ' + error.message);
    }finally{
      setLoading(false);
    }
  }

    if (loggedIn) {
      return (
        <HomePage togglePages={togglePages}  />
      );
    }

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🔒</Text>
        </View>
  
        <Text style={styles.welcomeText}>Welcome back, you have been missed!</Text>
  
       
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoComplete="email"
        />
  
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry = {true}
        />
  
        { loading ? <ActivityIndicator size="large" color= "#0000ff"/> :
        <TouchableOpacity onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
  }
        <View style={styles.registerContainer}>
          <Text>Not A Member? </Text>
            <TouchableOpacity onPress={togglePages}>
              <Text style={styles.registerText}>Register Now</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </View>
    );
}
export default LoginPage;
