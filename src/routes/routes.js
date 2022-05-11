import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';

function Rotas() {
    return (
        <Routes>
            <Route element={<SignIn />} path="/" />
            <Route element={<SignUp />} path="/singup" />
        </Routes>
    );
}

export default Rotas;