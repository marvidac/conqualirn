import React, { Component } from 'react';
import { ScrollView, Alert, Label, View, Text } from 'react-native';
import { Container, Toast } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import HeaderCustom from './components/HeaderCustom';
import ButtonCustom from './components/ButtonCustom';
import InputCustom from './components/Inputcustom';
import FirebaseService from '../dao/FirebaseService';
import { styles } from '../styles';
import MultiSelect from 'react-native-multiple-select';

export default class ServicoForm extends Component {

  multiSelect;

  constructor(props) {
    super(props);

    this.state = {
      document: 'servico',
      itens: [],
      selecionados: [],
      key: '',
      item: {
        name: '',
        itens: [],
      },
      podeDeletar: false,
    };
  }

  componentDidMount() {
    if (this.props.route.params != undefined
      && this.props.route.params.item != undefined
    ) {
      this.setState({
        key: this.props.route.params.item.key,
        name: this.props.route.params.item.name,
        item: this.props.route.params.item,
        selecionados: this.props.route.params.item.itens,
        podeDeletar: true,
      })
    }
    this.buscarTodosItens();
  }

  buscarTodosItens() {
    FirebaseService.getDataList('item', (dataRec) => {
      console.log(dataRec);
      this.setState({
        itens: dataRec,
        isLoading: false
      })
    })
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
        {
          text: "OK", onPress: () => {
            FirebaseService.remove(this.state.document, this.state.key);
            this.props.navigation.goBack();
          }
        }
      ],
      { cancelable: false }
    );
  }

  limpaTodos = () => {
    this.setState({
      key: '',
      name: '',
      selecionados: [],
      podeDeletar: false,
    })
  }

  constroiObjetoParaSalvar() {

    const paraSalvar = this.state.item;
    paraSalvar.name = this.state.name;
    paraSalvar.itens = this.state.selecionados;
    
    return paraSalvar;
  }

  save = () => {
    if (this.validar()) {
      const paraSalvar = this.constroiObjetoParaSalvar();
      let retorno = FirebaseService.pushData(this.state.document, paraSalvar);
      if (retorno != undefined && (typeof retorno === 'string')) {
        this.sucessMessage('Dados salvos com sucesso.');
        this.props.navigation.goBack();
      } else {
        this.failMessage('Ocorreu um erro. Tente novamente em alguns instantes.');
      }
    } else {
      this.failMessage('Campo Nome e Itens devem ser preenchidos.');
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
    if(!this.state.name) {
      retorno = false;
    } else if(!this.state.selecionados) {
      retorno = false;
    }
    return retorno;
  }

  onSelectedItemsChange = selected => {
    this.setState({ selecionados: selected });
  };

  render() {
    const selecionados = this.state.selecionados;
    const itens = this.state.itens;
    const labelMultiselect = `Selecione os Itens para o serviço`

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
              <InputCustom label="Nome" value={this.state.name} onChangeText={value => this.setState({ key: this.state.item.key, name: value })} />

              <View>
                <MultiSelect
                  hideTags
                  items={itens}
                  uniqueKey="key"
                  ref={(component) => { this.multiSelect = component }}
                  onSelectedItemsChange={this.onSelectedItemsChange}
                  selectedItems={selecionados}
                  selectText={labelMultiselect}
                  searchInputPlaceholderText="Search Items..."
                  onChangeInput={(text) => console.log(text)}
                  altFontFamily="ProximaNova-Light"
                  tagRemoveIconColor="#CCC"
                  tagBorderColor="#CCC"
                  tagTextColor="#CCC"
                  selectedItemTextColor="#CCC"
                  selectedItemIconColor="#CCC"
                  itemTextColor="#000"
                  displayKey="name"
                  searchInputStyle={{ color: '#CCC' }}
                  submitButtonColor="#CCC"
                  submitButtonText="Ok"
                />
              </View>
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