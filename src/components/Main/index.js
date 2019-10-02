import React, { Component } from 'react';
import { Container, Lista } from './styles';

import api from '../../services/api';

///products - Get Visualiza listagem de produtos
export default class Main extends Component {
  state = {
    newProduct: '',
    products: []
  };


  async componentDidMount() {
    const response = await api.get('https://api-39a-test.herokuapp.com/products');
    this.setState({ products: response.data.data });
  };

  render() {

    const { products } = this.state;

    return (
      <Container>
        <Lista>
          {products.map(product =>
            <li key={product.id}>{product.name}</li>
          )}
        </Lista>
      </Container>
    );
  }
}