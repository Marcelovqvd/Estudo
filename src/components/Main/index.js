import React, { Component } from 'react';
import { Container } from './styles';

import api from '../../services/api';

///products - Get Visualiza listagem de produtos
export default class Main extends Component {
  state = {
    newProduct: '',
    products: []
  };

  async componentDidMount() {
    const response = await api.get('https://api-39a-test.herokuapp.com/products');
  };

  render() {
    return (
      <Container>
        <h1>Main</h1>
      </Container>
    );
  }
}