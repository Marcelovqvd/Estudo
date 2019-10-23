import React, { Component } from 'react';
import { Container, Form } from './styles';
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
        <Form onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="Nome do produto"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input type="text"
            placeholder="Descrição do produto"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <button type="submit">Salvar</button>
        </Form>
        <Link to={`/`}>Voltar para a pagina inicial</Link>
      </Container >
    );
  };
}