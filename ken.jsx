import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Ken() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native!</Text>
      <Text>Ken</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});