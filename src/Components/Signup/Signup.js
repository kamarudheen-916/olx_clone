import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../context/context';
import {  useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
 

export default function Signup() {
 const navigate = useNavigate()
  // const Navigate = useNavigate()
  const [Username,setUserName]  = useState()
  const [email,setEmail]  = useState()
  const [phone,setPhone]  = useState()
  const [password,setPassword]  = useState()
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit=(e)=>{
      e.preventDefault()
     firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:Username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:Username,
          phone:phone
        }).then(()=>{
          navigate('/login')
        })
      })
     })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='image'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={Username}
            onChange={(e)=>setUserName(e.target.value)}
            type="text"
            id="fname"
            name="name"
         
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
           
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            type="number"
            id="lname"
            name="phone"
         
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="lname"
            name="password"
     
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
