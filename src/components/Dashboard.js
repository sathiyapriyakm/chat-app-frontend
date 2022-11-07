import React ,{useContext} from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import { useConversations } from '../contexts/ConversationsProvider'
import {AppContext} from "../contexts/AppState"

export default function Dashboard() {
  const {id } = useContext(AppContext);
    const {selectedConversation}=useConversations();
  return (
    <div style={{position:"relative"}}>
      <div className="d-flex" style={{height:"100vh"}}>

    <Sidebar id={id}/>
    
    {selectedConversation && <OpenConversation/>}
      </div>
      </div>
  )
}
