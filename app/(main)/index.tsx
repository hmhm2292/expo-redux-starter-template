import { router } from 'expo-router';
import { Button, StyleSheet, View } from 'react-native';
import CounterComponent from '../../components/Counter'; // Import reusable component

export default function Counter() {
  return (
    <View style={styles.container}>
      {/* Render the reusable Counter component */}
      <CounterComponent />
      {/* Add a button to open the modal */}
      <Button title="Open Counter Modal" onPress={() => router.push('/counter-modal')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20, // Add some spacing between Counter and Button
  },
});
