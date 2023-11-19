import React from 'react'
import Notes from '../Components/Notes/Notes';
import Headercomp from '../Components/Layout/Headercomp';
import Mynotes from "../Components/Mynotes/Mynotes";
import './Pages.css';
const NotesPage = () => {
  return (
  <div>
    <Headercomp/>
    <Notes/>
    <Mynotes/>
    </div>
  )
}

export default NotesPage;