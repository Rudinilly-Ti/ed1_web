import React from 'react';
import NavBar from '../../components/NavBar/navbar';
import { Outlet } from 'react-router-dom';

import { Container } from './styles';

function MainPage() {
    return (
        <Container>
            <NavBar />
            <Outlet />
        </Container>
    );
}

export default MainPage;