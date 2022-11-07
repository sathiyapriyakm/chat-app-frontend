import React ,{useState} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
// import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";
import { Register } from "./components/Register";
import { Login } from "./components/Login.js";
import { NotFound } from "./components/NotFound";
import { ForgetPassword } from "./components/ForgetPassword";
import { ChangePassword } from "./components/ChangePassword";
// import Login from "./components/Login";
// import ContactsProvider from "./contexts/ContactsProvider";
import {ConversationsProvider} from "./contexts/ConversationsProvider";
import SocketProvider from "./contexts/SocketProvider";
import Appstate from "./contexts/AppState"

function App() {
  // const [id,setId]=useState(localStorage.getItem("chat-app-id"));
  // const [id,setId]=useLocalStorage("id",null);
  // const dashboard=(
  //   <SocketProvider id={id}>
  //   <ContactsProvider>
  //     <ConversationsProvider id={id}>
  //     <Dashboard id={id}/>
  //     </ConversationsProvider>
  //   </ContactsProvider>
  //   </SocketProvider>
  // )

  // return (
  //   id ? dashboard :  <Login onIdSubmit={setId}/>
  //       );

  return (
<Appstate >
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Dashboard" element={<MainBoard flow="Dashboard"/>}/>
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/" element={<Navigate replace to="/Login" />} />
            <Route path="/404-Page" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404-Page" />} />
            <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
          </Routes>
    </Appstate>
  )
}

export default App;
function MainBoard({flow}){
  return (
      <>
      <SocketProvider>
    {/* <ContactsProvider> */}
      <ConversationsProvider>
            { {
                 "Dashboard":<Dashboard/>,
             }[flow]}
            </ConversationsProvider>
    {/* </ContactsProvider> */}
    </SocketProvider>
    </>
  );
}
