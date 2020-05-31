import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Left, Button, Right, Header, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DrawerActions } from '@react-navigation/native';
import { styles } from '../../styles';

class HeaderCustom extends Component {
    iconRightButton = null;
    iconLeftButton = null;
    functionRightButton  = null;
    functionLeftButton  = null;
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        //Regras para montar botão do lado direito
        let right = null;
        if (this.props.iconRightButton) {
            this.iconRightButton = this.props.iconRightButton;
            this.functionRightButton = this.props.functionRightButton;
            right = <Button
                transparent
                onPress={this.functionRightButton }>
                <Icon name={this.iconRightButton}  style={styles.icon} size={18} />
            </Button>
        }
        //Regras para montar botão do lado Esquerdo
        let left = null;
        if (this.props.iconLeftButton) {
            this.iconLeftButton = this.props.iconLeftButton;
            this.functionLeftButton = this.props.functionLeftButton;
            left = <Button
                transparent
                onPress={this.functionLeftButton }>
                <Icon name={this.iconLeftButton} style={styles.icon} size={18} />
            </Button>
        } else {
            left = <Button
            transparent
            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                <Icon name="bars" style={styles.icon} size={18} />
            </Button>
        }

        return (
            <Header style={styles.containerHeadBar}>
                <Left>
                    {left}
                </Left>
                <Body>
                    <Text style={styles.textHead}>{this.props.route.name}</Text>
                </Body>
                <Right>
                    {right}
                </Right>
            </Header>
        );
    }
}

export default HeaderCustom;