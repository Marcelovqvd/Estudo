import React, { Component } from 'react';
import { Container } from '../Home/styles';
import { Form } from './styles';
import { Link } from 'react-router-dom';

import api from '../../services/api';

export default class Create extends Component {
  state = {
    name: '',
    description: ''
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { name, description } = this.state;
    await api.post('/products', { name, description });
    this.props.history.push("/");
  }

  render() {

    return (
      <Container>
        <Link to={`products`}><h3>Lista de produtos cadastrados</h3></Link>

        <Form onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="Nome do produto"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input type="text"
            placeholder="Descrição do produto"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <button type="submit">Cadastrar Novo Produto</button>
        </Form>
      </Container >
    );
  };
}