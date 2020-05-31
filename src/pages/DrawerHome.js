import React, { Component } from 'react';
import { Container, Text, Content, ScrollView, Drawer } from 'react-native';
import DrawerContent from './DrawerContent';
import Home from './Home';

class DrawerHome extends Component {

    closeDrawer = () => {
        this._drawer._root.close()
    };

    openDrawer = () => {
        this._drawer._root.open()
    };
    
    render() {

        return (
            <Drawer
                type="static"
                ref={(ref) => { this._drawer = ref; }}
                content={<DrawerContent />}
            >
                <Container>
                    <Content>
                        <Text>Buceta</Text>
                    </Content>
                </Container>
            </Drawer>
        );
    }
}

export default DrawerHome;