import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Options, Welcome, Register, Interest, Home, PopularMovies, ReleasedMovie, Explore } from './screens';
import { SetUpProfile } from './components';


/* The code `const Stack = createNativeStackNavigator();` is creating a stack navigator using the
`createNativeStackNavigator` function from the `@react-navigation/native-stack` library. This stack
navigator will be used to define the navigation stack for the app. */
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

/**
 * This is a TypeScript React component that sets up a navigation stack for a mobile app.
 * @returns The code is returning a React component that renders a navigation container with multiple
 * stack groups. Each stack group contains multiple stack screens.
 */
const Stacks: React.FC = () => {
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
