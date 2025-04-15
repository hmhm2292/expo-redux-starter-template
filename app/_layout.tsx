import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Hide the splash screen once the layout is mounted
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack>
          {/* Delegate main app flow to the (main) group */}
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(modals)"
            options={{ headerShown: false, presentation: 'transparentModal' }}
          />
          {/* Keep the counter group */}
        </Stack>
      </PersistGate>
    </Provider>
  );
}
