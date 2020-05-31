import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, Left, Body, Text, Card, CardItem, List, ListItem, Right } from "native-base";

class DrawerContent extends Component {
    constructor() {
    }

    render() {
        return (
            <Container>

                <Content>
                    <List>
                        <ListItem>
                            <Text>Menu 1</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Menu 2</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Menu 3</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Menu 4</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Menu 5</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default DrawerContent;