import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import styles from "../styles/styles";

const HomeScreen = ({ togglePages }: { togglePages: () => void }) => {
    const [loading, setLoading] = useState(false);
  
    const logOut = async () => {
      setLoading(true);
      try {
        const response = await auth().signOut().then(
          () => console.log('User signed out!')
        );
        console.log(response);
        togglePages(); 
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.loggedInText}>You are logged in!</Text>
  
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={logOut}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  
  export default HomeScreen;