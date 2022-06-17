import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

import { InputGroup } from './styles';

function ChangePass({ update }) {
    const [show, setShow] = useState(false);
    const [pass, setPass] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={{
                height: 40,
                marginTop: 18,
                fontWeight: 'bold',
                background: '#04C35C',
                border: 0,
                fontSize: 14
            }} onClick={handleShow}>
                Salvar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ width: '100%' }} closeButton>
                    <Modal.Title style={{ width: '100%' }}>Salvar</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ width: '100%' }}>
                    <InputGroup>
                        <label>Senha Atual</label>
                        <input name='oldpass' value={pass} onChange={(e) => setPass(e.target.value)} type="password" />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer style={{ width: '100%' }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={() => {
                        update(pass)
                        handleClose()
                        setPass('')
                    }
                    }>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ChangePass;