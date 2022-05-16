import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';
import MainPage from '../pages/MainPage';
import Dashboard from '../pages/Dashboard';
import MyNotes from '../pages/MyNotes';
import NewNotes from '../pages/NewNotes';
import UserConfig from '../pages/UserConfig';

function RequireAuth({ children }) {
    const userLS = localStorage.getItem('user');
    let location = useLocation();

    if (!userLS) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}


function Rotas() {
    return (
        <Routes>
            <Route element={<SignIn />} path="/" />
            <Route element={<SignUp />} path="/singup" />
            <Route element={<RequireAuth><MainPage /></RequireAuth>} path="/mainpage" >
                <Route element={<Dashboard />} path="/mainpage/" />
                <Route element={<MyNotes />} path="/mainpage/mynotes" />
                <Route element={<NewNotes />} path="/mainpage/newnotes" />
                <Route element={<UserConfig />} path="/mainpage/config" />
            </Route>
        </Routes>
    );
}

export default Rotas;