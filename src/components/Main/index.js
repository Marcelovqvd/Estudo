import React, { Component } from 'react';
import { Container, Lista } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    products: []
  };


  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({ products: response.data.data });
  };

  render() {

    const { products } = this.state;

    return (
      <Container>
        <Lista>
          {products.map(product =>
            <li key={product.id}>
              {product.name}
              <Link to={`/update/${product.id}`}>Detalhes</Link>
            </li>
          )}
        </Lista>
      </Container>
    );
  }
}