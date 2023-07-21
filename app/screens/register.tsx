import { useState } from "react";
import auth from '@react-native-firebase/auth';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";

const RegisterPage = ({togglePages}:{togglePages: () => void}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);    
  
    const signUp = async () => {
      setLoading(true);
      if (password !== confirmPassword) {
          Alert.alert('Error', 'Passwords do not match. Please try again.');
          setLoading(false);
          return;
        }
  
  
      try {
          const response = await auth().createUserWithEmailAndPassword(email, password).then(
            () => {
              console.log('User account created & signed in!');
            }
          );
          console.log(response); 
      } catch (error: any) {
          console.log(error);
          Alert.alert('Registration failed: ' + error.message);
      }finally{
          setLoading(false);
      }
    }
  
  
  
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🔒</Text>
        </View>
  
        <Text style={styles.welcomeText}>Welcome back, you have been missed!</Text>
  
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoComplete="email"
        />
  
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry = {true}
        />
  
        <TextInput
        style= {styles.textInput}
        placeholder='Confirm Password'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry = {true}
        />
  
        {
          loading ? <ActivityIndicator size="large" color= "#0000ff"/>
          :    
        <TouchableOpacity onPress={signUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
  }
     
        <View style={styles.registerContainer}>
          <Text>Already have account </Text>
          <TouchableOpacity onPress={togglePages}>
            <Text style={styles.registerText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default RegisterPage;