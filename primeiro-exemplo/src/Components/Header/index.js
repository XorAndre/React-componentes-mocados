import React from 'react'
//Componetes da grid
import {
    Container,
    Col, 
    Row
} from '../Grid/Styles'
//Componente Banner
import {
    Banner,
    DescriptionBanner,
    Overlay
} from './Styles'
import './background.css';

const Header = () => {
    return (
        <Banner className="banner">
            <Overlay>
                <Container>
                    <Row>
                        <Col>
                            <DescriptionBanner>Olá Seja bem vindo ao meu site</DescriptionBanner>
                        </Col>
                    </Row>
                </Container>
            </Overlay>
        </Banner>
    );
} 
export default Header;