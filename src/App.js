import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage,Signuppage,ActivationPage,HomePage,NotesPage,Writerpage} from "./Routes.js"; 
import store from "./store";
import {loadUser } from "./Redux/action/user";
import ProtectedRoute from "./ProtectedRoute/Privateroute";
const App=()=>{
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/sign-in" element={<LoginPage />}/>
    <Route path="/sign-up" element={<Signuppage />}/>
    <Route path="/my-notes" element={<ProtectedRoute><NotesPage/></ProtectedRoute>}/>
    <Route path="/notes-writer" element={<ProtectedRoute><Writerpage/></ProtectedRoute>}/>
    <Route path="/activation/:activation_token" element={<ActivationPage />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
