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
          <p>Nome</p>
          <input type="text"
            placeholder="Escolha um nome para o produto"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <p>Descrição</p>
          <textarea type="text"
            placeholder="Escolha uma descrição para o produto"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <button type="submit">Salvar</button>
        </Form>
        <Link to={`/`}>Voltar para a pagina inicial</Link>
      </Container >
    );
  };
}