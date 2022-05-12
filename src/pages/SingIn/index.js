import React from 'react';
import { Button } from 'react-bootstrap';

import { Container, Content, InputGroup, ImgBackground } from './styles';

function SingIn() {
    return (
        <Container>
            <ImgBackground />
            <Content>
                <form action="">
                    <h6>BEM VINDO</h6>
                    <h4>ENTRE COM A SUA CONTA:</h4>
                    <InputGroup>
                        <label>Usuário:</label>
                        <input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <label>Senha:</label>
                        <input type="password" />
                    </InputGroup>
                    <Button style={{
                        width: '100%',
                        height: 40,
                        marginTop: 18,
                        fontWeight: 'bold',
                        background: '#04C35C',
                        border: 0,
                        fontSize: 14
                    }}> ENTRAR</Button>
                </form>
            </Content>
        </Container>
    );
}

export default SingIn;