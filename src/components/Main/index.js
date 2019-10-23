import React, { Component } from 'react';
import { Container, Lista, LinkStyle } from './styles';
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
        <h1>Nossos produtos</h1>
        <Lista>
          {products.map(product =>
            <li key={product.id}>
              <p>{product.name}
                <LinkStyle>
                  <Link to={`/product/${product.id}`}>Detalhes</Link>
                  <Link to={`/update/${product.id}`}>Atualizar</Link>
                </LinkStyle>
              </p>
            </li>
          )}
        </Lista>
      </Container>
    );
  }
}