import React, { Component } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default class ShowProduct extends Component {
  state = {
    product: '',
    description: ''
  }

  async componentDidMount() {
    const { match } = this.props;
    const productId = match.params.id;
    const response = await api.get(`/products/${productId}`);
    this.setState({ product: response.data.name });
    this.setState({ description: response.data.description });
  };

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {

    const { product, description } = this.state;

    return (
      <Container>
        <h1>{product}</h1>
        <p>{description}</p>
        <Link to={`/`}>Home</Link>
      </Container>
    )
  }

}

