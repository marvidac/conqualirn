import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/pages/rotas/drawerRoutes';

export default function navinext() {
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
}

