import React, {useRef,useContext} from 'react'
import { Form, Modal,Button } from 'react-bootstrap'
import {AppContext} from "../contexts/AppState"

export default function NewContactModal({closeModal}) {
    const idRef= useRef();
    const nameRef= useRef();
    const {createContact } = useContext(AppContext);
    // const { token } = useContext(AppContext);
    // const email = localStorage.getItem('userEmail');
    //  const {createContact}= useContacts();

    function handleSubmit(e){
        e.preventDefault();
        
         createContact({id:idRef.current.value,name:nameRef.current.value});
        closeModal();
    }

  return (
    <>
    <Modal.Header closeButton>Create Contact</Modal.Header>
    <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" ref={idRef} required></Form.Control>
            </Form.Group><Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={nameRef} required></Form.Control>
            </Form.Group>
            <Button type="submit">Create</Button>
        </Form>
    </Modal.Body> 
    </>
  )
}
