import React, { useContext, useState } from 'react';
import ChangePass from '../../components/ChangePass';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthProvider';

import { Button } from 'react-bootstrap';

import { Container, InputGroup } from './styles';

function UserConfig() {
    const { user, handleUser, setUser } = useContext(AuthContext);

    const [usuario, setUsuario] = useState(user.data);
    const [usuarioUp, setUsuarioUp] = useState({ ...user.data, senha: '' });

    const handleUpdate = async (senhaAtual) => {
        try {
            if (senhaAtual === usuario.senha) {
                if (!usuarioUp.senha) {
                    setUsuarioUp({ ...usuarioUp, senha: usuario.senha })
                }
                const response = await api.put(`/usuarios/${usuarioUp.id}`, usuarioUp)
                setUsuario(response.data)
                setUser(response)
                handleUser(response)
                setUsuarioUp({ ...usuarioUp, senha: '' })
            } else {
                alert("Senha atual incorreta")
            }

        } catch (error) {
            alert(error.response.data)
        }
    }

    return (
        <Container>
            <InputGroup>
                <label>Usuário:</label>
                <input name='email' type="text" value={usuarioUp.email} onChange={(e) => setUsuarioUp({ ...usuarioUp, email: e.target.value })} />
            </InputGroup>
            <InputGroup>
                <label>Nome:</label>
                <input name='name' type="text" value={usuarioUp.nome} onChange={(e) => setUsuarioUp({ ...usuarioUp, nome: e.target.value })} />
            </InputGroup>
            <InputGroup>
                <label>Nova Senha:</label>
                <input name='password' value={usuarioUp.senha} type="password" onChange={(e) => setUsuarioUp({ ...usuarioUp, senha: e.target.value })} />
            </InputGroup>
            <ChangePass update={handleUpdate} />
        </Container>
    );
}

export default UserConfig;