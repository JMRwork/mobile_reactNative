import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { SessionProvider, useSession } from './ctx';
import {
  MD3DarkTheme as DarkTheme, DefaultTheme, PaperProvider
} from 'react-native-paper';
import { useStorageState } from './useStorageState';
import { useColorScheme } from 'react-native';


// Prevent the splash screen from auto-hiding before asset loading is complete.


export default function RootLayout() {
  const [theme, setTheme] = useStorageState('theme');

  return (
    <PaperProvider theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <SessionProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />
          <Stack.Screen name="forgot-password" />
          <Stack.Screen name="novo-item" />
          <Stack.Screen name="settings" options={{ headerShown: false }} />
        </Stack>
      </SessionProvider>
    </PaperProvider >
  );
}
