import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { Container } from 'react-bootstrap';
import { ContainerStyled } from './styles';

const Layout = props => {
  return (
    <ContainerStyled fluid className="p-0">
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </ContainerStyled>
  );
};

export default Layout;
