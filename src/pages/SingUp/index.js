import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import { Container, Content, InputGroup, ImgBackground } from './styles';

function SingUp() {
    const navigate = useNavigate();

    const handleSingUp = useCallback(() => {
        navigate("/");
    }, [navigate])

    return (
        <Container>
            <ImgBackground />
            <Content>
                <form onSubmit={handleSingUp}>
                    <h4>FAÇA SEU CADASTRO:</h4>
                    <InputGroup>
                        <label>Usuário:</label>
                        <input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <label>Nome:</label>
                        <input type="password" />
                    </InputGroup>
                    <InputGroup>
                        <label>Senha:</label>
                        <input type="password" />
                    </InputGroup>
                    <Button type='submit' style={{
                        width: '100%',
                        height: 40,
                        marginTop: 8,
                        fontWeight: 'bold',
                        background: '#04C35C',
                        border: 0,
                        fontSize: 14
                    }}> CADASTRAR-SE</Button>
                </form>
            </Content>
        </Container>
    );
}

export default SingUp;