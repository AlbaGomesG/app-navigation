import React from "react";
import StackScreen from '../pages/StackScreen';
import Stack2 from '../pages/Stack2';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Stack Screen">
            <Stack.Screen name="Stack Screen" component={StackScreen}/>
            <Stack.Screen name="Stack 2" component={Stack2}/>
        </Stack.Navigator>
    );
}