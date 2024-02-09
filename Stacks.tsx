import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Options, Welcome, Register, Interest, Home, PopularMovies, ReleasedMovie, Explore } from './screens';
import { SetUpProfile } from './components';

type StackProps = {};

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Stacks: React.FC<StackProps> = () => {
  const theme = {
    ...DefaultTheme,
    // Your custom theme configurations go here
  };

  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator initialRouteName='Welcome' screenOptions={screenOptions}>
        <Stack.Group>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Interest" component={Interest} />
          <Stack.Screen name="SetUpProfile" component={SetUpProfile} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PopularMovies" component={PopularMovies} />
          <Stack.Screen name="ReleasedMovie" component={ReleasedMovie} />
          <Stack.Screen name="Explore" component={Explore} />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export {
  Stacks
};
