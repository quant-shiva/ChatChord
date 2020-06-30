import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import io from 'socket.io-client';
import { AuthContextProvider } from './contexts/AuthContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const socket = io('http://192.168.137.1:3000');

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthContextProvider>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </AuthContextProvider>
    );
  }
}
