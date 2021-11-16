import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './componant/Header/Header';
import Book from './componant/Book/Book';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import Room from './componant/Room/Room';
import PrivateRouter from './componant/PrivateRouter/PrivateRouter';

export const userContext = createContext()

function App() {
   const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <div >
      <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
       <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <PrivateRouter path="/book/:bedType">
                <Book />
            </PrivateRouter>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/room">
              <Room />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
