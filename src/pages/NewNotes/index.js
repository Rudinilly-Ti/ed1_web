import React, { useState, useContext } from 'react';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthProvider'
import { Button } from 'react-bootstrap';


import { Container, InputGroup } from './styles';

function NewNotes() {

    const { user } = useContext(AuthContext);
    const [note, setNote] = useState({
        cabecalho: '',
        conteudo: '',
        usuario: user.data.id
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post('/tasks', note)
            setNote({ ...note, cabecalho: '', conteudo: '' })
        } catch (error) {
            alert(error.response.data)
        }
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <InputGroup>
                    <label>Titulo</label>
                    <input name='title' value={note.cabecalho} onChange={(e) => setNote({ ...note, cabecalho: e.target.value })} type="text" />
                </InputGroup>
                <InputGroup>
                    <label>Conteúdo</label>
                    <textarea value={note.conteudo} onChange={(e) => setNote({ ...note, conteudo: e.target.value })} name="content" id="" cols="30" rows="5" />
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
            </form>
        </Container>
    );
}

export default NewNotes;