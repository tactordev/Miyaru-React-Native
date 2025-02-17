import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';


export default function NotFoundScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Oops!' }} />
        <Text>Page not found!</Text>
    </View>
  );
}
