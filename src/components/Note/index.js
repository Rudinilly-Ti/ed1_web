import React from 'react';

import { Container, Img, Content } from './styles';

function Note({ data }) {
    return (
        <Container>
            <Img />
            <Content>
                <h6>{data.date} - {data.title}</h6>
                <hr />
                <span>{data.content}</span>
            </Content>
        </Container>
    );
}

export default Note;