import React, { Component } from 'react';
import api from '../../services/api';

export default class Update extends Component {
  state = {
    name: '',
    description: ''
  }

  async componentDidMount() {
    const { match } = this.props;
    const productId = match.params.id;
    const response = await api.get(`/products/${productId}`);
    console.log(response.data);
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { name, description } = this.state;
    const { match } = this.props;
    const productId = match.params.id;
    await api.put(`/products/${productId}`, { name, description });
  }

  render() {

    const { name, description } = this.state;

    return (
      <>
        <h1>Editar produto</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Editar Nome</label>
          <input type="text"
            onChange={e => this.setState({ name: e.target.value })}
            value={name}
          />
          <label>Editar Descrição</label>
          <input type="text"
            onChange={e => this.setState({ description: e.target.value })}
            value={description}
          />
          <button type="submit">Salvar</button>
        </form>
      </>
    )
  }

}

