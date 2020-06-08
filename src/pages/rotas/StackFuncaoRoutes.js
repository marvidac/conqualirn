import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FuncaoLista from '../FuncaoLista';
import FuncaoForm from '../FuncaoForm';

const StackFuncao = createStackNavigator();

export default function StackFuncaoRoutes() {
    return (
        <StackFuncao.Navigator>
            <StackFuncao.Screen name="Funcao" component={FuncaoLista} options={{ headerShown: false }} />
            <StackFuncao.Screen name="FuncaoForm" component={FuncaoForm}  options={{ headerShown: false }} />
        </StackFuncao.Navigator>
    );
}