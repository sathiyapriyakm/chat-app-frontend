import React,{useContext} from 'react'
import { ListGroup } from 'react-bootstrap';
// import { useContacts } from '../contexts/ContactsProvider'
import {AppContext} from "../contexts/AppState"

export default function Contacts() {
  const {contacts } = useContext(AppContext);
  // const {contacts}=useContacts();
  return (
   <ListGroup variant="flush">
{contacts?contacts.map((contact)=>(
  <ListGroup.Item key={contact.id}>
    {contact.name}
  </ListGroup.Item>
)):<></>}
   </ListGroup>
  )
}
