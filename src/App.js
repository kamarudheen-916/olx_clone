import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create';
import View from './Pages/ViewPost'
import { AuthContext,FirebaseContext } from './context/context';

import Home from './Pages/Home';
import Post from './context/postContext';

function App() {
  const {setUser} =  useContext(AuthContext)
  const {firebase} =  useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
    })
  })
  return (
    <div>
      <Post >
      <Router>
        <Routes>
        <Route exact path='/' element={<Home />}/>
                
          
          <Route path='/signup' element={<Signup />}/>
                
          
          <Route path='/login' element={<Login />}/>
                
          
          <Route path='/create' element={<Create />}/>
                
          
        
         
          <Route path='/view/:id' element={ <View />}/>
              
          </Routes> 
      </Router>

      </Post>
    </div>
  );
}

export default App;
