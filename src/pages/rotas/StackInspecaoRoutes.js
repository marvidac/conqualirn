import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InspecaoLista from '../InspecaoLista';
import InspecaoForm from '../InspecaoForm';

const StackInspecao = createStackNavigator();

export default function StackInspecaoRoutes() {
    return (
        <StackInspecao.Navigator>
            <StackInspecao.Screen name="Inspecao" component={InspecaoLista} options={{ headerShown: false }} />
            <StackInspecao.Screen name="InspecaoForm" component={InspecaoForm}  options={{ headerShown: false }} />
            <StackInspecao.Screen name="InspecaoNaoConformidadeForm" component={InspecaoForm}  options={{ headerShown: false }} />
        </StackInspecao.Navigator>
    );
}