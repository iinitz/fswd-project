import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css'

const Footer = () => {
    return (
        <footer className="page-footer">
            <Container fluid>
                <Row>
                    <Col sm={3}>img</Col>
                    <Col sm={9}>About us</Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;