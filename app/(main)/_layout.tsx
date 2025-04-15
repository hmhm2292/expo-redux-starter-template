import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function MainLayoutWithSlot() {
  return (
    <View style={styles.container}>
      {/* You could add shared UI elements here, above/below the Slot */}
      {/* <Text>This is part of the main layout</Text> */}
      {/* Slot renders the matched child screen (app/(main)/index.tsx) */}
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5, // Add some padding around the content
  },
});
