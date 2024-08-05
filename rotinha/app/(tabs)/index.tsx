import { View, StyleSheet } from 'react-native';

import Home from './home'
import Contact from './contact'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home/>
      <Contact/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  
});
