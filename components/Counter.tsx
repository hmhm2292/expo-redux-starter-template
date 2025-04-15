import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectCounterValue } from '../store/features/counter/selectors';
import { decrement, fetchCounterStart, increment } from '../store/features/counter/slice';

interface CounterProps {
  showTitle?: boolean;
  showFetchButton?: boolean;
}

export default function Counter({ showTitle = true, showFetchButton = true }: CounterProps) {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounterValue);

  return (
    <View style={styles.container}>
      {showTitle && <Text style={styles.title}>Counter</Text>}
      <Text style={styles.counter}>Count: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.button} onPress={() => dispatch(increment())}>
          Increment
        </Text>
        <Text style={styles.button} onPress={() => dispatch(decrement())}>
          Decrement
        </Text>
        {showFetchButton && (
          <Text style={styles.button} onPress={() => dispatch(fetchCounterStart())}>
            Fetch
          </Text>
        )}
      </View>
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
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
