import React,{ useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function PopUp () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button variant="primary" onClick={handleShow}>Login</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Anda Berhasil Login
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Exit</Button>
          <Button variant="primary" onClick={handleClose}>Save Username & Password</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default PopUp
