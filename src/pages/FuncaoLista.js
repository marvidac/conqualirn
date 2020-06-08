import React, { Component } from 'react';
import { Container, Content } from "native-base";
import HeaderCustom from './components/HeaderCustom';
import { Text, StyleSheet } from 'react-native';
import FirebaseService from '../dao/FirebaseService';
import ListaDeItens from './components/ListaDeItens';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles';

class FuncaoLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: 'funcao',
      isLoading: true,
      data: [],
      error: null
    };
  }

  
  componentDidMount() {
    this.setState({ isLoading: true });
    FirebaseService.getDataList(this.state.document, (dataRec) => {
      this.setState({
        data: dataRec,
        isLoading: false
      })
    })
    }
      
  clickDoAdd = () => {
    this.props.navigation.push("FuncaoForm");
  }
  
  render() {
    let conteudo;
    if (this.state.isLoading) {
      conteudo = <Text>Carregando...</Text>;
    } else {
      conteudo = <ListaDeItens 
      itens={this.state.data} 
      routeParam="FuncaoForm"
      {...this.props} 
      />;
    }
    return (
      <Container style={styles.containerScreen}>
          <HeaderCustom 
            iconRightButton="plus" 
            functionRightButton={this.clickDoAdd} 
            {...this.props} />
        <Content>
          <ScrollView>
            {conteudo}
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default FuncaoLista;