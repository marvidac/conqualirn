import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LocalLista from '../LocalLista';
import LocalForm from '../LocalForm';

const StackLocal = createStackNavigator();

export default function StackLocalRoutes() {
    return (
        <StackLocal.Navigator>
            <StackLocal.Screen name="Local" component={LocalLista} options={{ headerShown: false }} />
            <StackLocal.Screen name="LocalForm" component={LocalForm}  options={{ headerShown: false }} />
        </StackLocal.Navigator>
    );
}