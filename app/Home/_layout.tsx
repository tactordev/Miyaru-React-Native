import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            display: 'none',
            position: 'absolute',
          },
          default: {
            height: 0,
            width: 0,
            display: 'none',
          },
        }),
      }}>
      
    </Tabs>
  );
}

