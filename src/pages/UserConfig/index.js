import React, { useContext, useState } from 'react';
import ChangePass from '../../components/ChangePass';
import { AuthContext } from '../../context/AuthProvider';

import { Button } from 'react-bootstrap';

import { Container, InputGroup } from './styles';

function UserConfig() {
    const { user } = useContext(AuthContext);

    const [usuario, setUsuario] = useState(user);

    return (
        <Container>
            <InputGroup>
                <label>Usuário:</label>
                <input name='email' type="text" value={usuario.email} onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} />
            </InputGroup>
            <InputGroup>
                <label>Nome:</label>
                <input name='name' type="text" />
            </InputGroup>
            <Button type='submit' style={{
                width: '100%',
                height: 40,
                marginTop: 18,
                fontWeight: 'bold',
                background: '#04C35C',
                border: 0,
                fontSize: 14
            }}> SALVAR</Button>
            <ChangePass />
        </Container>
    );
}

export default UserConfig;