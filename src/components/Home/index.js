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
        <h1>Loticáryo</h1>
        <Link to={`products`}>Conheça nossos produtos</Link>
        <Link to={`post`}>Cadastre novo produto</Link>
      </Container >
    );
  };
}