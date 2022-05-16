import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


import { Container, InputGroup } from './styles';

function NewNotes() {


    const [note, setNote] = useState([]);
    return (
        <Container>
            <form onSubmit={() => { }}>
                <InputGroup>
                    <label>Titulo</label>
                    <input name='title' value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} type="text" />
                </InputGroup>
                <InputGroup>
                    <label>Data</label>
                    <input name='date' value={note.date} onChange={(e) => setNote({ ...note, date: e.target.value })} type="date" />
                </InputGroup>
                <InputGroup>
                    <label>Conteúdo</label>
                    <textarea value={note.content} onChange={(e) => setNote({ ...note, content: e.target.value })} name="content" id="" cols="30" rows="5" />
                </InputGroup>
                <div>
                    <input style={{ width: 15 }} id='check' type="checkbox" /> <label htmlFor="check">Favoritar</label>
                </div>
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