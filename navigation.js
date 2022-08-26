import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "./screens/GetStartedScreen";
import LetYouInScreen from "./screens/LetYouInScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import LogInScreen from "./screens/LogInScreen";
import AccountSetUpChooseInterest from "./screens/Account/AccountSetUpChooseInterest";
import AccountSetUpProfile from "./screens/Account/AccountSetUpProfile";
import HomePageScreen from "./screens/Home/HomePageScreen";
import TopPopularScreen from "./screens/Home/TopPopularScreen";
import TopReleaseScreen from "./screens/Home/TopReleaseScreen";
import ExploreScreen from "./screens/Explore/ExploreScreen";

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

export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="AccountSetUpChooseInterest" screenOptions={screenOptions}>
            <Stack.Screen name="AccountSetUpChooseInterest" component={AccountSetUpChooseInterest} />
            <Stack.Screen name="AccountSetUpProfile" component={AccountSetUpProfile} />
        </Stack.Navigator>
    </NavigationContainer>
)

export const HomeStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePageScreen" screenOptions={screenOptions}>
            <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
            <Stack.Screen name="TopPopularScreen" component={TopPopularScreen} />
            <Stack.Screen name="TopReleaseScreen" component={TopReleaseScreen} />
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)