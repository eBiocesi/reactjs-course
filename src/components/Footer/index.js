import React from 'react';
import { StyledFooter } from './styles';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <StyledFooter>
      <Row>
        <Col lg={4} xs={6}>
          <p>France</p>
        </Col>
        <Col lg={4} xs={6}>
          <p>World</p>
        </Col>
        <Col lg={4} xs={6}>
          <p>World</p>
        </Col>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
