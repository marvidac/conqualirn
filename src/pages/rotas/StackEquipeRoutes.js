import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EquipeLista from '../EquipeLista';
import EquipeForm from '../EquipeForm';

const StackEquipe = createStackNavigator();

export default function StackEquipeRoutes() {
    return (
        <StackEquipe.Navigator>
            <StackEquipe.Screen name="Equipe" component={EquipeLista} options={{ headerShown: false }} />
            <StackEquipe.Screen name="EquipeForm" component={EquipeForm}  options={{ headerShown: false }} />
        </StackEquipe.Navigator>
    );
}