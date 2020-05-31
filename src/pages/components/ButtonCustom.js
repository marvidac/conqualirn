import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Item } from "native-base";

export default class ButtonCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {

        return (
            <Item inlineLabel style={{ borderBottomColor: "#fff", paddingLeft: 10 }}>
                <Button rounded style={{ width: 150, justifyContent: "center" }} {... this.props}>
                    <Text style={{ color: "white" }}>{this.props.label}</Text>
                </Button>
            </Item>
        );
    }
}