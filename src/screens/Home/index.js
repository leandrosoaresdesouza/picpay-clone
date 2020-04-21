import React from 'react';
import { useTheme } from '@react-navigation/native';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Banner from '../../components/Banner';

export default function Home() {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color={colors.primary}
          />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 350,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" size={30} color={colors.primary} />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
