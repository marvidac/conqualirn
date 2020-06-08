import React, { Component } from 'react';
import { ScrollView, Alert, Label, View, Text } from 'react-native';
import { Container, Toast, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import HeaderCustom from './components/HeaderCustom';
import ButtonCustom from './components/ButtonCustom';
import InputCustom from './components/Inputcustom';
import FirebaseService from '../dao/FirebaseService';
import { styles } from '../styles';
import MultiSelect from 'react-native-multiple-select';
import DatePicker from 'react-native-date-picker';

export default class InspecaoForm extends Component {

  multiSelect;

  constructor(props) {
    super(props);

    this.state = {
      document: 'inspecao',
      key: '',
      dataInspecao: '',
      locais: [],
      equipes: [],
      servicos: [],
      itens: [],
      locaisSelecionados: [],
      equipesSelecionados: [],
      servicosSelecionados: [],
      itensEmConformidade: [],
      item: {
        data: '',
        locaisSelecionados: [],
        equipesSelecionados: [],
        servicosSelecionados: [],
        itensEmConformidade: [],
      },
      podeDeletar: false,
      data: new Date(),
    };
  }

  componentDidMount() {
    if (this.props.route.params != undefined
      && this.props.route.params.item != undefined
    ) {
      this.setState({
        key: this.props.route.params.item.key,
        dataInspecao: this.props.route.params.item.data,
        locaisSelecionados: this.props.route.params.item.locais,
        equipeSelecionados: this.props.route.params.item.equipes,
        servicosSelecionados: this.props.route.params.item.servicos,
        itensEmConformidade: this.props.route.params.item.itensEmConformidade,
        podeDeletar: true,
      })
    }

    this.setState({ isLoading: true });
    const locais = this.buscarTodos('local');
    const equipes = this.buscarTodos('equipe');
    const servicos = this.buscarTodos('servico');

    this.setState({
      locais: locais,
      equipes: equipes,
      servicos: servicos,
      isLoading: false
    })
  }

  buscarTodos(str) {
    let lista = [];
    FirebaseService.getDataList(str, (dataRec) => {
      lista = dataRec;
    })

    return lista;
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

  limparTodos = () => {
    this.setState({
      key: '',
      dataInspecao: '',
      locaisSelecionados: [],
      equipesSelecionados: [],
      servicosSelecionados: [],
      itensEmConformidade: [],
      item: {
        data: '',
        locaisSelecionados: [],
        equipesSelecionados: [],
        servicosSelecionados: [],
        servicosSelecionados: [],
        itensEmConformidade: [],
      },
      podeDeletar: false,
    })
  }

  constroiObjetoParaSalvar() {

    const paraSalvar = this.state.item;
    paraSalvar.data = this.state.dataInspecao;
    paraSalvar.locaisSelecionados = this.state.locaisSelecionados;
    paraSalvar.equipesSelecionados = this.state.equipesSelecionados;
    paraSalvar.servicosSelecionados = this.state.servicosSelecionados;

    return paraSalvar;
  }

  save = () => {
    if (this.validar()) {
      const paraSalvar = this.constroiObjetoParaSalvar();

      this.props.navigation.push('InspecaoNaoConformidadeForm', { inspecao: this.state.item })

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
    if (!this.state.name) {
      retorno = false;
    } else if (!this.state.selecionados) {
      retorno = false;
    }
    return retorno;
  }

  onSelectedServicoChange = selected => {
    this.setState({ locaisSelecionados: selected });
  };

  onSelectedEquipeChange = selected => {
    this.setState({ equipesSelecionados: selected });
  };

  onSelectedServicoChange = selected => {
    this.setState({ servicosSelecionados: selected });
    this.buscarIensPorServico(selected.itens);
  };

  onSelectedItensEmConformidadeChange = selected => {
    this.setState({ itensEmConformidade: selected });
  };

  buscarIensPorServico = (itens) => {
    
  }

  onChangeData = (selectedDate) => {
    const currentDate = this.state.data;
    this.setState({
      data: selectedDate
    })
  };

  render() {
    const locaisSelecionados = this.state.locaisSelecionados;
    const equipesSelecionados = this.state.equipesSelecionados;
    const servicosSelecionados = this.state.servicosSelecionados;
    const itensEmConformidade = this.state.itensEmConformidade;

    const locais = this.state.locais;
    const equipes = this.state.equipes;
    const servicos = this.state.servicos;
    const itens = this.state.itens;

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
              <Body>
                <DatePicker
                  date={this.state.data}
                  mode='date'
                  onDateChange={this.onChangeData}
                />
              </Body>

              <View>
                {this.constroiMultiselect('Local',locais,locaisSelecionados,this.onSelectedServicoChange )}
              </View>
              <View>
                {this.constroiMultiselect('Equipe',equipes,equipesSelecionados,this.onSelectedEquipeChange )}
              </View>
              <View>
                {this.constroiMultiselect('Serviço',servicos,servicosSelecionados,this.onSelectedServicoChange )}
              </View>
              <View>
                {this.constroiMultiselect('Itens em Conformidade',itens,itensEmConformidade,this.onSelectedItensEmConformidadeChange )}
              </View>
            </ScrollView>
            <Row style={{ height: 50, alignSelf: "center" }}>
              <ButtonCustom label="Não Confirmidade >>" onPress={this.save} />
              <ButtonCustom label="Limpar" onPress={this.limpaTodos} />
            </Row>
          </Col>
        </Grid>
      </Container>
    );
  }

  constroiMultiselect = (label, itens, selecionados, onSelectedChange) => {
    
    return (
      <MultiSelect
        hideTags
        single
        items={itens}
        uniqueKey="key"
        ref={(component) => { this.multiSelect = component }}
        onSelectedItemsChange={onSelectedChange}
        selectedItems={selecionados}
        selectText={label}
        searchInputPlaceholderText="Procure ..."
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
    )
  }
}
