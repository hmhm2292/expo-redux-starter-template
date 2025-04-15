import { router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Counter from '../../components/Counter';

export default function CounterModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Modal</Text>
      {/* Use the counter component, maybe with different props */}
      <Counter showTitle={false} showFetchButton={false} />
      <Button title="Close Modal" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
