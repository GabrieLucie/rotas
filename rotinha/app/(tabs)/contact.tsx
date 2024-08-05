import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function ContactScreen() {
    const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Screen</Text>
      <Text style={styles.description}>
        This is the Contact Screen to get in touch if necessary.
      </Text>
      <Button title="Voltar" onPress={() => router.push('/home')} color="#000" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Verde escuro
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFF',
    marginBottom: 20,
    fontFamily: 'Inter', 
  },
  description: {
    fontSize: 16,
    color: '#FFF', // Branco = FFF
    textAlign: 'center',
    fontFamily: 'Love Light', // Fonte 'Love Light',
    paddingBottom: 10,
  },
});