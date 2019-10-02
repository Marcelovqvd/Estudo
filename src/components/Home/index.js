import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Home() {

  return (
    <Container>
      <h1>Seja bem-vindo à nossa página</h1>
      <Link to={`products`}><h3>Conheça nossos produtos</h3></Link>
    </Container>
  )
}