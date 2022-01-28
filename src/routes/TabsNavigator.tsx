import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import ChatScreen from '@screens/Chat';
import HealthJourneyScreen from '@screens/HealthJourney';

const { Navigator, Screen } = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Navigator>
      <Screen name="Health Journey" component={HealthJourneyScreen} />
      <Screen name="Chat" component={ChatScreen} />
    </Navigator>
  );
}

export default TabsNavigator;
