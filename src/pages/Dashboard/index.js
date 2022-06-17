import React, { useState, useEffect, useContext } from 'react';
import api from '../../services/api';
import Note from '../../components/Note';
import { Button } from 'react-bootstrap';

import jsPDF from 'jspdf'
import { Container } from './styles';

import { AuthContext } from '../../context/AuthProvider'

function Dashboard() {
    const [items, setItems] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        handleData()
    }, [])

    const handleData = async () => {
        const response = await api.get(`/tasks/buscar?id=${user.data.id}`);
        setItems(response.data);
    }


    const handlePDF = () => {
        let counter = 10;
        var doc = new jsPDF()

        items.map((item) => {
            doc.setFontSize(20)
            doc.text(item.cabecalho, 10, counter + 10)
            doc.setFontSize(14)
            doc.text(item.conteudo, 10, counter + 20, {
                align: 'justify'
            })
            doc.text("______________________________________________", 10, counter + 30)
            counter = counter + 40;
        })


        doc.save(`${user.data.nome}.pdf`);
    }
    return (
        <Container>
            {items.map(item => (
                <Note key={item.id} data={item} />
            ))}
            <div style={{ position: 'absolute', bottom: 30, right: 30 }}><Button onClick={handlePDF}>Baixar dados</Button></div>

        </Container>
    );
}

export default Dashboard;