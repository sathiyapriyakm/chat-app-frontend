import { createContext } from 'react';
 import { API } from '../global';
import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

// const token = localStorage.getItem('token');
export const AppContext = createContext();
 

export const Appstate = (props) => {
 const navigate =useNavigate();
  // const [taskList, setTaskList] = useState(null);
  const [id,setId]=useState(localStorage.getItem("chat-app-id"));
  const [token,setToken]=useState(localStorage.getItem("token"));
  const [contacts, setContacts] = useState([]);
  const [conversations, setConversations] = useState([]);

 function  handleLogOut (){
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("chat-app-id");
    localStorage.removeItem("chat-app-contacts");
    localStorage.removeItem("chat-app-conversations");
    navigate("/");
  }

  const createContact =(updatedContact) => {
    try{
    fetch(`${API}/user/updateContacts/${id}`,
    {
      method:"PUT",
      body: JSON.stringify(updatedContact),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
  }).then((res)=>{
    if(res.status===401){  
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userType");
      navigate("/");
      } 
     return getContacts();
  })
  .catch((e)=>console.log("ERROR"))  
}catch(err){
  console.log(err);
   navigate("/")
  };
  };


  const getContacts = () => {
    fetch(`${API}/user/getContacts/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
    })
      .then((data) => {
        if(data.status===401){  
          localStorage.removeItem("token");
          localStorage.removeItem("userEmail");
          localStorage.removeItem("userType");
          navigate("/");
          }
        return data.json()})
      .then((contacts) => {
        setContacts(contacts)
  })
  }

  const createConversation =(updatedConversation) => {
    try{
    fetch(`${API}/user/updateConversations/${id}`,
    {
      method:"PUT",
      body: JSON.stringify(updatedConversation),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
  }).then((res)=>{
    if(res.status===401){  
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userType");
      navigate("/");
      } 
     return getConversations();
  })
  .catch((e)=>console.log("ERROR"))  
}catch(err){
  console.log(err);
   navigate("/")
  };
  };

  const getConversations = () => {
    fetch(`${API}/user/getConversations/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
    })
      .then((data) => {
        if(data.status===401){  
          localStorage.removeItem("token");
          localStorage.removeItem("userEmail");
          localStorage.removeItem("userType");
          navigate("/");
          }
        return data.json()})
      .then((conversations) => {
        setConversations(conversations)
  })
  }




  return (
    <AppContext.Provider
      value={{
        // taskList,
        // getOpenTasks,
        // handleDelete,
        id,
        setId,
        handleLogOut,
        token,
        setToken,
        contacts,
        createContact,
        conversations,
        createConversation,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default Appstate