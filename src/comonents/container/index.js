import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import ProductCreate from '../products/create'

const ContainerLayout=()=>{
    return(
        <Container>
            <Row className="justify-content-md">
                <Col md="auto">Formulario de registro</Col>
            </Row>
            <Row className="justify-content-md">
                <Col>
                <ProductCreate />
                </Col>
            </Row>
            
        </Container>
    )
}

export default ContainerLayout