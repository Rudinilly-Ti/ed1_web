import React from 'react';

import { Container, Img, Content } from './styles';

function Note({ data }) {

    return (
        <Container>
            <Img />
            <Content>
                <h6>{data.cabecalho}</h6>
                <hr />
                <span>{data.conteudo}</span>
            </Content>
        </Container>
    );
}

export default Note;