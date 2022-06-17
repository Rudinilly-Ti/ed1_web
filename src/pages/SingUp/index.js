import React, { useCallback, useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import { Container, Content, InputGroup, ImgBackground } from './styles';

function SingUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        nome: '',
        email: '',
        senha: ''
    });
    const handleSingUp = useCallback(async (e) => {
        e.preventDefault()
        try {
            const response = await api.post('/usuarios', user)

            navigate("/");
        } catch (error) {
            alert(error.response.data)
        }

    }, [navigate, user])

    return (
        <Container>
            <ImgBackground />
            <Content>
                <form onSubmit={handleSingUp}>
                    <h4>FAÇA SEU CADASTRO:</h4>
                    <InputGroup>
                        <label>Usuário:</label>
                        <input name='email' type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </InputGroup>
                    <InputGroup>
                        <label>Nome:</label>
                        <input name='nome' type="text" onChange={(e) => setUser({ ...user, nome: e.target.value })} />
                    </InputGroup>
                    <InputGroup>
                        <label>Senha:</label>
                        <input name='senha' autoComplete='nova-senha' type="password" onChange={(e) => setUser({ ...user, senha: e.target.value })} />
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