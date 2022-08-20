import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "./screens/GetStartedScreen";
import LetYouInScreen from "./screens/LetYouInScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import LogInScreen from "./screens/LogInScreen";

const Stack = createStackNavigator()


const screenOptions = {
    headerShown: false,
}

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStartedScreen" screenOptions={screenOptions}>
            <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
            <Stack.Screen name="LetYouInScreen" component={LetYouInScreen} />
            <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
            <Stack.Screen name="LogInScreen" component={LogInScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)