import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Home';
import { Button } from 'native-base';
import { Icon, Avatar } from 'react-native-elements';

//Routes
import StackLocalRoutes from './StackLocalRoutes';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Controle de Qualidade" component={Home} 
                options={{ 
                    title: "Controle de Qualidade",
                    headerLeft: props => <ButtonHamburgerHome />,
                    headerRight: props => <AvatarHome />,
                }}
            />
            <Drawer.Screen name="Local" component={StackLocalRoutes} />
        </Drawer.Navigator>
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