import React from 'react';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import PayButton from '../components/PayButton';

import HomeScreen from '../screens/Home';
import WalletScreen from '../screens/Wallet';
import PayScreen from '../screens/Pay';

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

export default function Routes() {
  const Tab = createBottomTabNavigator();
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: `${colors.tab.active}`,
        inactiveTintColor: `${colors.tab.inactive}`,
        style: {
          backgroundColor: `${colors.tab.background}`,
          borderTopColor: `${colors.tab.border}`,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Início' }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ title: 'Carteira' }}
      />
      <Tab.Screen name="Pay" component={PayScreen} options={{ title: '' }} />
      <Tab.Screen
        name="Notifications"
        component={PayScreen}
        options={{ title: 'Notificações' }}
      />
      <Tab.Screen
        name="Settings"
        component={PayScreen}
        options={{ title: 'Ajustes' }}
      />
    </Tab.Navigator>
  );
}
