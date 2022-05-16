import React from 'react';
import LineNote from '../../components/LineNote';
import { Button } from 'react-bootstrap';
import { Container, NoteComponent } from './styles';

function MyNotes() {
    const data = {
        title: "MINHA NOTA",
        date: '2022-06-22',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa esse asperiores obcaecati distinctio et corporis facilis, non suscipit! In similique sint culpa nesciunt consequuntur tempore reiciendis dolorum praesentium nostrum ea.'
    }

    return (
        <Container>
            <NoteComponent>
                <LineNote data={data} />
                <Button style={{
                    marginLeft: 10,
                    background: '#E14343',
                    border: 0,
                    height: 40
                }}>Deletar</Button>
            </NoteComponent>
            <NoteComponent>
                <LineNote data={data} />
                <Button style={{
                    marginLeft: 10,
                    background: '#E14343',
                    border: 0,
                    height: 40
                }}>Deletar</Button>
            </NoteComponent>
            <NoteComponent>
                <LineNote data={data} />
                <Button style={{
                    marginLeft: 10,
                    background: '#E14343',
                    border: 0,
                    height: 40
                }}>Deletar</Button>
            </NoteComponent>
            <NoteComponent>
                <LineNote data={data} />
                <Button style={{
                    marginLeft: 10,
                    background: '#E14343',
                    border: 0,
                    height: 40
                }}>Deletar</Button>
            </NoteComponent>
        </Container>
    );
}

export default MyNotes;