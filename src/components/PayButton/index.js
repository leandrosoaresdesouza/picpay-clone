import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Button, Label } from './styles';

export default function PayButton({ onPress, focused }) {
  const { colors } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? [
                `${colors.tab.mainItem.inactive.colorX}`,
                `${colors.tab.mainItem.inactive.colorX}`,
              ]
            : [
                `${colors.tab.mainItem.active.colorX}`,
                `${colors.tab.mainItem.active.colorY}`,
              ]
        }
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.2 }}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={
            focused
              ? `${colors.tab.mainItem.inactive.text}`
              : `${colors.tab.mainItem.active.text}`
          }
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
