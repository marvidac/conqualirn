import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Home';
import { Root, Button } from 'native-base';
import { Icon, Avatar } from 'react-native-elements';

//Routes
import StackLocalRoutes from './StackLocalRoutes';
import StackItemRoutes from './StackItemRoutes';
import StackFuncionarioRoutes from './StackFuncionarioRoutes';
import StackFuncaoRoutes from './StackFuncaoRoutes';
import StackServicoRoutes from './StackServicoRoutes';
import StackEquipeRoutes from './StackEquipeRoutes';
import StackInspecaoRoutes from './StackInspecaoRoutes';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        //Root é necessário para que alguns componentes native-base funcionem. Ex: Toast
        <Root> 
            <Drawer.Navigator>
                <Drawer.Screen name="Controle de Qualidade" component={Home}
                    options={{
                        title: "Controle de Qualidade",
                        headerLeft: props => <ButtonHamburgerHome />,
                        headerRight: props => <AvatarHome />,
                    }}
                />
                <Drawer.Screen name="Local" component={StackLocalRoutes} />
                <Drawer.Screen name="Item" component={StackItemRoutes} />
                <Drawer.Screen name="Funcionário" component={StackFuncionarioRoutes} />
                <Drawer.Screen name="Função" component={StackFuncaoRoutes} />
                <Drawer.Screen name="Serviço" component={StackServicoRoutes} />
                <Drawer.Screen name="Equipe" component={StackEquipeRoutes} />
                <Drawer.Screen name="Inspeção" component={StackInspecaoRoutes} />
            </Drawer.Navigator>
        </Root>
    );
}

function ButtonHamburgerHome() {
    return (
        <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
        </Button>
    );
}
function AvatarHome() {
    return (
        <Avatar rounded icon={{ name: 'person', color: 'black', type: 'font-awesome5' }} size="medium" />
    );
}