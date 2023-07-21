import { useState } from "react";
import { View } from "react-native";
import styles from "./app/styles/styles";
import LoginPage from "./app/screens/login";
import RegisterPage from "./app/screens/register";

const App = () => {
  const [showRegister, setShowRegister] = useState(false);

  const togglePages = () => {
    setShowRegister(a => !a);
  };

  return (
    <View style={styles.container}>
      {showRegister ? (
        <RegisterPage togglePages={togglePages} />
      ) : (
        <LoginPage togglePages={togglePages} />
      )}
    </View>
  );
};



export default App;