import React,{useContext} from 'react'
import { ListGroup } from 'react-bootstrap'; 
import { useConversations } from '../contexts/ConversationsProvider';
import {AppContext} from "../contexts/AppState"

export default function Conversations() {
  const {selectConversationIndex}=useConversations();
  const {conversations } = useContext(AppContext);
  return (
   <ListGroup variant="flush">
{conversations.map((conversation,index)=>(
  <ListGroup.Item 
  key={index}
  action
  onClick={()=>selectConversationIndex(index)}
  active={conversation.selected}
  >
    {conversation.recipients.map(r =>r.name).join(", ")}
  </ListGroup.Item>
))}
   </ListGroup>
  )
}
