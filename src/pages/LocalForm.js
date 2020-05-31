import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Container, Content, Form, Input, Item, Label } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import HeaderCustom from './components/HeaderCustom';
import ButtonCustom from '../pages/components/ButtonCustom';
import InputCustom from '../pages/components/Inputcustom';
import FirebaseService from '../dao/FirebaseService';
import { styles } from '../styles';

export default class LocalForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      local: {
        name: ''
      },
    };
  }

  componentDidMount() {
    if (this.props.route.params != undefined
      && this.props.route.params.item != undefined
    ) {
      this.setState({
        local: this.props.route.params.item
      })
    }
  }

  limpaTodos = () => {
    this.setState({
      local: {
        name: ''
      }
    })
  }

  salva = () => {
    FirebaseService.pushData('local', this.state.local);
  }

  render() {
    let conteudo;

    if (this.state.local != undefined) {
      conteudo = <Text>{this.state.local.id}</Text>
    } else {
      conteudo = <Text>Nada enviado</Text>
    }
    return (
      <Container style={styles.containerScreen}>
        <HeaderCustom
          iconLeftButton="arrow-back"
          functionLeftButton={() => { this.props.navigation.goBack(); }}
          {...this.props} />
        <Grid>
          <Col>
              <ScrollView>
                <InputCustom label="Nome" value={this.state.local.name} onChangeText={value => this.setState({ local: { name: value } })} />
              </ScrollView>
            <Row style={{ height: 50, alignSelf: "center" }}>
              <ButtonCustom label="Salvar" onPress={()=> { console.log("Salvar") }} />
              <ButtonCustom label="Limpar" onPress={this.limpaTodos} />
            </Row>
          </Col>
        </Grid>
      </Container>
    );
  }
}
