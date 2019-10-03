import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

export default class Home extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const response = await api.get('https://api-39a-test.herokuapp.com/products');
    this.setState({ products: response.data.data });
  };

  render() {
    return (
      <Container>
        <h1>Seja bem-vindo à nossa página</h1>
        <Link to={`products`}><h3>Conheça nossos produtos</h3></Link>
        <Link to={`post`}>Cadastrar Novo Produto</Link>
      </Container >
    );
  };
}