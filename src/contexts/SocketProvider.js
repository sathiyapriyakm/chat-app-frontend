import React,{createContext,useContext,useEffect,useState} from 'react'
import io from "socket.io-client"
import {AppContext} from "../contexts/AppState"

const SocketContext=createContext();

export function useSocket(){
    return useContext(SocketContext);
}

export default function SocketProvider({children}) {
  const {id } = useContext(AppContext);
  
  useEffect(()=>{
    const newSocket=io("http://localhost:4000",{query:{id }})
    setSocket(newSocket)
    return ()=>newSocket.close();
  },[id])

  const [socket,setSocket]=useState(null);
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
