import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { signOut } from '@services/slices/auth';

function HealthJourneyScreen() {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <View>
      <Text>Health Journey</Text>
      <Button title="Sign-out" onPress={handleSignOut} />
    </View>
  );
}

export default HealthJourneyScreen;
