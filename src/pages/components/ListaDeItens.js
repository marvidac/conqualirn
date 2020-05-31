import React, { Component } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../styles';

export default class ListaDeItens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itens: []
        };
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.itens}
                    renderItem={({ item }) => (
                        <Card>
                            <TouchableOpacity>
                                <CardItem>
                                    <Body>

                                        <Text style={styles.text}>User Name: {item.name}</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="angle-right" style={styles.iconList} size={18} />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>
                    )}
                />
            </View>
        );
    }
}