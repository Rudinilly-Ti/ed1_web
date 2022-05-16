import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { InputGroup } from './styles';

function LineNote({ data }) {
    const [show, setShow] = useState(false);
    const [note, setNote] = useState(data);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant='outline-success' style={{ width: '500px', height: '40px' }} onClick={handleShow}>
                {note.date} - {note.title}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ width: '100%' }} closeButton>
                    <Modal.Title style={{ width: '100%' }}>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ width: '100%' }}>
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
                </Modal.Body>
                <Modal.Footer style={{ width: '100%' }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LineNote;