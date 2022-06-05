import React from 'react';


import { Container, Divider } from './styles';
import Note from '../../components/Note';

function Dashboard() {
    const data = {
        date: '10/05/2022',
        title: 'MINHA NOTA',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa esse asperiores obcaecati distinctio et corporis facilis, non suscipit! In similique sint culpa nesciunt consequuntur tempore reiciendis dolorum praesentium nostrum ea.'

    }

    return (
        <Container>
            <Divider>
                <h3>Recentes</h3>
                <Note data={data} />
            </Divider>
            <Divider>
                <h3>Favoritos</h3>
                <Note data={data} />
                <Note data={data} />
                <Note data={data} />
                <Note data={data} />
                <Note data={data} />
                <Note data={data} />
                <Note data={data} />
            </Divider>
        </Container>
    );
}

export default Dashboard;
