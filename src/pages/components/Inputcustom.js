import React, { Component } from 'react';
import { Container, Content, Input, Item, Label } from "native-base";

export default class InputCustom extends Component {
    constructor({label='', onChangeText='', ...props}) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {

        return (
            <Item floatingLabel style={{ paddingTop: 10}}>
                <Label style={{ paddingTop: 10}}>{this.props.label}</Label>
                <Input
                    placeholder={this.props.label}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    onFocus={this.props.onFocus}
                />
            </Item>
        );
    }
}