import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

import { InputGroup } from './styles';

function ChangePass() {
    const [show, setShow] = useState(false);
    const [pass, setPass] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant='danger' style={{ marginTop: 10 }} onClick={handleShow}>
                Alterar Senha
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ width: '100%' }} closeButton>
                    <Modal.Title style={{ width: '100%' }}>Alterar Senha</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ width: '100%' }}>
                    <InputGroup>
                        <label>Senha Atual</label>
                        <input name='oldpass' value={pass.oldPass} onChange={(e) => setPass({ ...pass, oldPass: e.target.value })} type="password" />
                    </InputGroup>
                    <InputGroup>
                        <label>Nova Senha</label>
                        <input name='newpass' value={pass.newPass} onChange={(e) => setPass({ ...pass, newPass: e.target.value })} type="password" />
                    </InputGroup>
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

export default ChangePass;