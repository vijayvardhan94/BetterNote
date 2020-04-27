import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import NotesList from "./components/notes-list.component";
import EditNote from "./components/edit-note.component";
import CreateNote from "./components/create-note.component";
import CreateTopic from "./components/create-topic.component";


function App() {
  return (
    <Router>
    <div className = "container">
    <Navbar />
    <br/>
    <Route path="/" exact component={NotesList} />
    <Route path="/edit/:id" component={EditNote} />
    <Route path="/create" component={CreateNote} />
    <Route path="/topics" component={CreateTopic} />
    </div>
    
    
  </Router>
  
  );
}

export default App;
