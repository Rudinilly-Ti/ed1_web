import React, { useState, useEffect, useContext } from 'react';
import LineNote from '../../components/LineNote';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthProvider';
import { Button } from 'react-bootstrap';
import { Container, NoteComponent } from './styles';

function MyNotes() {
    const [items, setItems] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        handleData()
    }, [])

    const handleData = async () => {
        const response = await api.get(`/tasks/buscar?id=${user.data.id}`);
        setItems(response.data);
    }

    const handleDelete = async (id) => {
        try {
            const response = await api.delete(`/tasks/${id}`);
            handleData()
        } catch (error) {
            alert(error.response.data)
        }
    }

    return (
        <Container>
            {items.map(item => (
                <NoteComponent key={item.id}>
                    <LineNote data={item} />
                    <Button style={{
                        marginLeft: 10,
                        background: '#E14343',
                        border: 0,
                        height: 40
                    }} onClick={() => handleDelete(item.id)}>Deletar</Button>
                </NoteComponent>
            ))}
        </Container>
    );
}

export default MyNotes;