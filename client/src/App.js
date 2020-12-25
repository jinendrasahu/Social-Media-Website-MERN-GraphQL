import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Menubar from './Components/Menubar';
import { Container } from 'semantic-ui-react';

function App() {
  return (
   
     <Router>
     <Container>
     <Menubar/>
     <Route exact path='/' component={Home}/>
     <Route exact path='/login' component={Login}/>
     <Route exact path='/register' component={Register}/>
     </Container>
   </Router>
   
  );
}

export default App;
