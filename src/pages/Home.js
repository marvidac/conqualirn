import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Card, CardItem, Content, Container, Left, Button, Right, Header, Body } from 'native-base';
import { Icon } from 'react-native-elements';
import HeaderCustom from './components/HeaderCustom';
import { styles } from '../styles';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container style={styles.containerScreen}>
                <Content>
                    <HeaderCustom { ...this.props} />
                    <Card>
                        <CardItem header bordered>
                            <Text>Inspeções em andamento</Text>
                        </CardItem>
                        <ScrollView>
                            <CardItem>
                                <Icon
                                    name='sc-telegram'
                                    type='evilicon'
                                    color='#517fa4'
                                />
                                <Text>Inspeção 1</Text>
                            </CardItem>
                            <CardItem>
                                <Icon
                                    name='sc-telegram'
                                    type='evilicon'
                                    color='#517fa4'
                                />
                                <Text>Inspeção 1</Text>
                            </CardItem>
                            <CardItem>
                                <Icon
                                    name='sc-telegram'
                                    type='evilicon'
                                    color='#517fa4'
                                />
                                <Text>Inspeção 1</Text>
                            </CardItem>
                            <CardItem>
                                <Icon
                                    name='sc-telegram'
                                    type='evilicon'
                                    color='#517fa4'
                                />
                                <Text>Inspeção 1</Text>
                            </CardItem>
                            <CardItem>
                                <Icon
                                    name='sc-telegram'
                                    type='evilicon'
                                    color='#517fa4'
                                />
                                <Text>Inspeção 1</Text>
                            </CardItem>
                            <CardItem>
                                <Icon
                                    name='sc-telegram'
                                    type='evilicon'
                                    color='#517fa4'
                                />
                                <Text>Inspeção 1</Text>
                            </CardItem>
                            <CardItem>
                                <Icon
                                    name='sc-telegram'
                                    type='evilicon'
                                    color='#517fa4'
                                />
                                <Text>Inspeção 2</Text>
                            </CardItem>
                            <CardItem>
                                <Icon
                                    name='sc-telegram'
                                    type='evilicon'
                                    color='#517fa4'
                                />
                                <Text>Inspeção 3</Text>
                            </CardItem>

                        </ScrollView>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Home;