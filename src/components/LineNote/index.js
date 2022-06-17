import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import api from '../../services/api';
import { InputGroup } from './styles';

function LineNote({ data }) {
    const [show, setShow] = useState(false);
    const [note, setNote] = useState(data);
    const [noteUp, setNoteUp] = useState({
        cabecalho: data.cabecalho,
        conteudo: data.conteudo,
        usuario: data.usuario.id
    });

    const handleClose = () => {
        setShow(false)
        setNoteUp(note)
    };
    const handleShow = () => setShow(true);

    const handleUpdate = async () => {
        try {
            const response = await api.put(`/tasks/${note.id}`, { cabecalho: noteUp.cabecalho, conteudo: noteUp.conteudo, usuario: noteUp.usuario })
            setNote({ ...note, noteUp });
            setShow(false)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <Button variant='outline-success' style={{ width: '500px', height: '40px' }} onClick={handleShow}>
                {noteUp.cabecalho}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ width: '100%' }} closeButton>
                    <Modal.Title style={{ width: '100%' }}>{data.cabecalho}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ width: '100%' }}>
                    <InputGroup>
                        <label>Titulo</label>
                        <input name='title' value={noteUp.cabecalho} onChange={(e) => setNoteUp({ ...noteUp, cabecalho: e.target.value })} type="text" />
                    </InputGroup>
                    <InputGroup>
                        <label>Conteúdo</label>
                        <textarea value={noteUp.conteudo} onChange={(e) => setNoteUp({ ...noteUp, conteudo: e.target.value })} name="content" id="" cols="30" rows="5" />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer style={{ width: '100%' }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LineNote;