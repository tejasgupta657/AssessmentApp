import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './navigation';
import ListScreen from '../screens/ListScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
                <Stack.Group
                    screenOptions={({ route }) => ({
                        headerShown: false,
                    })}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="List" component={ListScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStackNavigator;