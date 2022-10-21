import React, { useState } from "react";

import { AsyncPaginate } from "react-select-async-paginate";

import loadOptions from "./loadOptions";

import { getFirestore, addDoc, collection } from 'firebase/firestore';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const App = () => {
  const [value, setValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false);

  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [nit, setNit] = useState('');
  const [phone, setPhone] = useState('');

  const handleCode = (event) => {
    setCode(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleBusinessName = (event) => {
    setBusinessName(event.target.value);
  };

  const handleNit = (event) => {
    setNit(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  
  const onChangeValue = (event) => {
    const currentValue = event.value;
    if (currentValue === 0) {
      openModal();
    } else {
      setValue(event);
    }
  };

  const handleClick = () => {
    setIsButtonDisabled(true);
    const companyInfo = { code, name, businessName, nit, phone };

    const db = getFirestore();
    const companiesCollection = collection(db, 'companies');
    addDoc(companiesCollection, companyInfo).then(() => closeModal());
  }

  return (
    <div>
      <h1 className="text-center mb-4">Dropdown Paginado</h1>

      <AsyncPaginate
        value={value}
        loadOptions={loadOptions}
        onChange={onChangeValue}
      />

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nueva compañía</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCode" onChange={handleCode}>
            <Form.Label>Código</Form.Label>
            <Form.Control type="text" placeholder="Ingrese código" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName" onChange={handleName}>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCBusinessName" onChange={handleBusinessName}>
            <Form.Label>Razón social</Form.Label>
            <Form.Control type="text" placeholder="Ingrese razón social" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNit" onChange={handleNit}>
            <Form.Label>NIT</Form.Label>
            <Form.Control type="text" placeholder="Ingrese NIT" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone" onChange={handlePhone}>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text" placeholder="Ingrese teléfono" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
          <Button
            disabled={
              !code ||
              !name ||
              !businessName || 
              !nit ||
              !phone ||
              isButtonDisabled } onClick={handleClick} variant="primary" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
