import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Book from '../screens/Book';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const initialRouteName = "Home"
    const homeOptions = {headerShown: false};

    return (
        <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen name='Home' component={Home} options={homeOptions}/>
            <Stack.Screen name='Book' component={Book}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;