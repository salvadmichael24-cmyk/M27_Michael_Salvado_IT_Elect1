import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const ChatInput = () => {
  return (
    <View style={styles.chatInputContainer}>
      <Text style={styles.icon}>&lt;</Text>
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        placeholderTextColor="#888"
      />
      <Text style={styles.icon}>🔍</Text>
      <Text style={styles.icon}>&gt;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 25,
    margin: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 20,
    color: 'blue',
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ChatInput />
    </View>
  );
}
