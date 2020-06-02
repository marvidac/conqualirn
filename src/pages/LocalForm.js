import React, { Component } from 'react';
import { ScrollView, Alert} from 'react-native';
import { Container, Toast } from 'native-base';
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
      document: 'local',
      item: {
        name: ''
      },
      podeDeletar: false,
    };
  }

  componentDidMount() {
    if (this.props.route.params != undefined
      && this.props.route.params.item != undefined
    ) {
      this.setState({
        item: this.props.route.params.item,
        podeDeletar: true,
      })
    }
  }

  createAlert() {
    Alert.alert(
      "Deseja Remover?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        { text: "OK", onPress: () => {
          FirebaseService.remove(this.state.document, this.state.item.key);
          this.props.navigation.goBack();
        }
       }
      ],
      { cancelable: false }
    );
  }

  limpaTodos = () => {
    this.setState({
      item: {
        name: ''
      },
      podeDeletar: false,
    })
  }

  save = () => {
    if (this.validar()) {
      let retorno = FirebaseService.pushData(this.state.document, this.state.item);
      if (retorno != undefined && (typeof retorno === 'string')) {
        this.sucessMessage('Dados salvos com sucesso.');
        this.props.navigation.goBack();
      } else {
        this.failMessage('Ocorreu um erro. Tente novamente em alguns instantes.');
      }
    } else {
      this.failMessage('Campo Nome deve ser preenchido.');
    }
  }

  sucessMessage(texto = '') {
    Toast.show({
      text: texto,
      position: 'center',
      type: 'success',
      duration: 2300
    });
  }

  failMessage(texto = '') {
    Toast.show({
      text: texto,
      position: 'center',
      type: 'danger',
      duration: 2300
    });
  }

  validar() {
    let retorno = true;
    if (!this.state.item) {
      retorno = false;
    } else if (!this.state.item.name) {
      retorno = false;
    }
    return retorno;
  }
  render() {
    return (
      <Container style={styles.containerScreen}>
        <HeaderCustom
          iconLeftButton="arrow-left"
          functionLeftButton={() => { this.props.navigation.goBack(); }}
          iconRightButton={this.state.podeDeletar ? "trash" : null}
          functionRightButton={
            () => {
              if (this.state.podeDeletar) {
                this.createAlert();
              }
            }
          }
          {...this.props} />
        <Grid>
          <Col>
            <ScrollView>
              <InputCustom label="Nome" value={this.state.item.name} onChangeText={value => this.setState({ item: { name: value } })} />
            </ScrollView>
            <Row style={{ height: 50, alignSelf: "center" }}>
              <ButtonCustom label="Salvar" onPress={this.save} />
              <ButtonCustom label="Limpar" onPress={this.limpaTodos} />
            </Row>
          </Col>
        </Grid>
      </Container>
    );
  }
}