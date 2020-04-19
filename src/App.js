import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { light, dark } from './styles/themes';

export default function App() {
  // const scheme = useColorScheme();
  const scheme = 'dark';

  return (
    <NavigationContainer theme={scheme === 'dark' ? dark : light}>
      <ThemeProvider theme={scheme === 'dark' ? dark : light}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
