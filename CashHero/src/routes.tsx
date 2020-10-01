import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

const AppStack = createStackNavigator();

const Routes: React.FunctionComponent = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} >
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="CreateAccount" component={CreateAccount} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;