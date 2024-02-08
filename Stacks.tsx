import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Options, Welcome, Register, Interest } from './screens';
import { SetUpProfile } from './components';

type AuthStackProps = {};

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AuthStack: React.FC<AuthStackProps> = () => {
  const theme = {
    ...DefaultTheme,
    // Your custom theme configurations go here
  };

  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator initialRouteName='Welcome' screenOptions={screenOptions}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Interest" component={Interest} />
        <Stack.Screen name="SetUpProfile" component={SetUpProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export { AuthStack };
