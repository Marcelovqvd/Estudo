import React, { Component } from 'react';
import api from '../../services/api';

export default class Update extends Component {
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

  render() {

    const { product, description } = this.state;

    return (
      <>
        <h1>{product}</h1>
        <p>{description}</p>
      </>
    )
  }

}

