import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemLista from '../ItemLista';
import ItemForm from '../ItemForm';

const StackItem = createStackNavigator();

export default function StackItemRoutes() {
    return (
        <StackItem.Navigator>
            <StackItem.Screen name="Item" component={ItemLista} options={{ headerShown: false }} />
            <StackItem.Screen name="ItemForm" component={ItemForm}  options={{ headerShown: false }} />
        </StackItem.Navigator>
    );
}