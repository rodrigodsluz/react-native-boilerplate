import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  Container,
} from './styles';

import Button from '@components/Button';
import { setAuthentication } from '@services/slices/auth';

export type RootStackParamList = {
  SignUpPhoneVerification: object | undefined;
};

function SignUpWithPhoneScreen() {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(
      setAuthentication({
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      }),
    );
  };

  return (
    <Container>
      <Text>Hello World</Text>
      <Button title="Sign-in" onPress={handleNext} variant="solid" width="85%" />
    </Container>
  );
}

export default SignUpWithPhoneScreen;
