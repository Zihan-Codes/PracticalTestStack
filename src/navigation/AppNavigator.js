import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Task3 from '../screens/Task3';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Task3' component={Task3} />
          </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;