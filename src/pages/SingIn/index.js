import React, { useCallback, useContext } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { AuthContext } from '../../context/AuthProvider';

import { Container, Content, InputGroup, ImgBackground } from './styles';

function SingIn() {
    const navigate = useNavigate();
    const { handleUser } = useContext(AuthContext);

    const handleSingIn = useCallback(
        async (e) => {
            e.preventDefault();
            let user = {
                email: '',
                senha: ''
            }
            const { email, senha } = e.target.elements;

            if (!email.value || !senha.value) {
                alert("Os campos não podem estar vazios")
            } else {
                user.email = email.value;
                user.senha = senha.value;

                try {
                    const response = await api.post('/usuarios/autenticar', user)

                    handleUser(response);
                    navigate("/mainpage")

                } catch (error) {
                    alert(error.response.data)
                    console.log(error);
                }
            }

        }, [navigate, handleUser]
    )


    return (
        <Container>
            <ImgBackground />
            <Content>
                <form onSubmit={handleSingIn}>
                    <h6>BEM VINDO</h6>
                    <h4>ENTRE COM A SUA CONTA:</h4>
                    <InputGroup>
                        <label>Usuário:</label>
                        <input name='email' type="text" />
                    </InputGroup>
                    <InputGroup>
                        <label>Senha:</label>
                        <input name='senha' type="password" />
                    </InputGroup>
                    <Button type='submit' style={{
                        width: '100%',
                        height: 40,
                        marginTop: 18,
                        fontWeight: 'bold',
                        background: '#04C35C',
                        border: 0,
                        fontSize: 14
                    }}> ENTRAR</Button>
                </form>
                <a style={{ textDecoration: 'none', justifySelf: 'center', marginTop: 10, color: '#04C35C' }} href='/singup'>FAÇA SEU CADASTRO</a >
            </Content>
        </Container>
    );
}

export default SingIn;