import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import ShowProduct from '../Product/index';

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
    this.setState({ name, description });
    alert('Produto salvo com sucesso')
  }

  render() {

    const { name, description } = this.state;

    return (
      <>
        <h1>Editar produto</h1>
        <ShowProduct match={this.props.match} />
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
        <Link to={`/products`}>Voltar para a lista de produtos</Link>
        <p>Novo nome: {name}</p>
        <p>Nova descrição: {description}</p>
      </>
    )
  }

}

