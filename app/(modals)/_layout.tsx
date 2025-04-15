import { Slot } from 'expo-router';
import { View } from 'react-native';

// Layout specifically for routes inside the (modals) group
export default function ModalsLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <View style={{ backgroundColor: 'blue' }}>
        <Slot />
      </View>
    </View>
  );
}
