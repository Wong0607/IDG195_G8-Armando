import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido al himalaya </Text>
      <Text style={styles.titleText}>Bienvenido al himalaya </Text>
      <StatusBar style="auto" />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#23F5C7',
    alignItems: 'Center',
    justifyContent: 'Center',  
  },
  titleText:{
    fontSize: 100,
    color: "black",
    alignItems: 'Center',
  }
  });
