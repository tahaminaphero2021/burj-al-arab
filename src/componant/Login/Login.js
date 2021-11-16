import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../config';
import { ErrorOutlined } from '@material-ui/icons';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }


const Login = () => {

    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const history =useHistory();
    const location =useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName,email,photoURL}= res.user;
            const newUser ={
                name:displayName,
                email,
                photo:photoURL
            }
                setLoggedInUser(newUser);
                history.replace(from);
          })
          .catch(err => {
            console.log(ErrorOutlined);
          });
    }
    return (
        <div>
            <h1>This is Loggin Page</h1>
            <Button onClick={()=> handleGoogleSignIn()}
            color="primary"
            >Google SignIn</Button>
          <h1>Name: {loggedInUser.name} </h1>
           
        </div>
    );
};

export default Login;