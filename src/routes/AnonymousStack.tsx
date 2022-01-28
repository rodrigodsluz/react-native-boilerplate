import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';

import OnboardingScreen from '@screens/Onboarding';
import SignUpWithPhoneScreen from '@screens/SignUpWithPhone';

const { Navigator, Screen } = createStackNavigator();

function AnonymousStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />

        <Screen
          name="SignUpWithPhone"
          component={SignUpWithPhoneScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default AnonymousStack;
