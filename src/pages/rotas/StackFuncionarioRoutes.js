import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FuncionarioLista from '../FuncionarioLista';
import FuncionarioForm from '../FuncionarioForm';

const StackFuncionario = createStackNavigator();

export default function StackFuncionarioRoutes() {
    return (
        <StackFuncionario.Navigator>
            <StackFuncionario.Screen name="Funcionario" component={FuncionarioLista} options={{ headerShown: false }} />
            <StackFuncionario.Screen name="FuncionarioForm" component={FuncionarioForm}  options={{ headerShown: false }} />
        </StackFuncionario.Navigator>
    );
}