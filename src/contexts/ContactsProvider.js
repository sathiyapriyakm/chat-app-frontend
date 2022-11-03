import React,{useContext,createContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext=createContext();
export function useContacts(){
  return useContext(ContactsContext);
}

export default function ContactsProvider({children}) {
  const [contacts,setContacts]=useLocalStorage("contacts",[]);

  function createContact(id, name) {
    setContacts(prevContacts => {
      let newContactArr=prevContacts;
      newContactArr.push({ id, name });
      return newContactArr;
      // return [...prevContacts, { id, name }]
    })
  }



  return (
  <ContactsContext.Provider value={{contacts,createContact}}>
    {children}
  </ContactsContext.Provider>
  )
}
