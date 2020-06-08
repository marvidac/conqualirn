import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ServicoLista from '../ServicoLista';
import ServicoForm from '../ServicoForm';

const StackServico = createStackNavigator();

export default function StackServicoRoutes() {
    return (
        <StackServico.Navigator>
            <StackServico.Screen name="Servico" component={ServicoLista} options={{ headerShown: false }} />
            <StackServico.Screen name="ServicoForm" component={ServicoForm}  options={{ headerShown: false }} />
        </StackServico.Navigator>
    );
}