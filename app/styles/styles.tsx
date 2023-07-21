import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      padding: 25,
    },
    appbar:{
      backgroundColor: '',
      borderStartWidth: 0,
    },
    loggedInText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 100,
      color: 'green',
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 25,
      paddingTop: 50,
    },
    logo: {
      fontSize: 120,
    },
    welcomeText: {
      fontSize: 20,
      marginBottom: 25,
    },
    textInput: {
      height: 50,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#000',
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'black',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    registerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    registerText: {
      color: 'blue',
      fontSize: 16,
      marginLeft: 4,
    },
  });

  export default styles;