import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../screens/Login'
import Dashboard from "../screens/Dashboard";
import SignUp from '../screens/SignUp'
import BottomTab from "./BottomTab";

const Stack = createStackNavigator();
const AppNavigator=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="BottomTab"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="BottomTab" component={BottomTab} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator