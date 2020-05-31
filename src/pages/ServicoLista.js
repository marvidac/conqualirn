import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Card, CardItem, Content, Container } from 'native-base';


class ServicoLista extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Button
                            title="Go to Home"
                            onPress={() => this.props.navigation.navigate("Home")}
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}

export default ServicoLista;