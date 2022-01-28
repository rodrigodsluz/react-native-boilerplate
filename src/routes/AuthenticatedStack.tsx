import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import TabsNavigator from './TabsNavigator';

const { Navigator, Screen } = createStackNavigator();

function AuthenticatedStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default AuthenticatedStack;
